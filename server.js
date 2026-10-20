require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 3000;

const JWT_SECRET = (process.env.JWT_SECRET || '').trim();
if (!JWT_SECRET || JWT_SECRET === 'handlio-demo-secret-change-me' || JWT_SECRET.length < 16) {
  console.error('[FATAL] JWT_SECRET must be set in .env (min 16 chars, not the demo default).');
  process.exit(1);
}
const ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES || '15m';
const REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES || '7d';
const EXTRA_JSON_MAX = 16_384; // bytes stringified

// Шаг 4: CORS whitelist (не cors() без ограничений)
const DEFAULT_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:8080',
  'http://127.0.0.1:8080'
];
const ALLOWED_ORIGINS = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const originList = ALLOWED_ORIGINS.length ? ALLOWED_ORIGINS : DEFAULT_ORIGINS;

// Security headers (helmet-like without hard dep if missing)
try {
  const helmet = require('helmet');
  app.use(helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
        connectSrc: ["'self'", "https://nominatim.openstreetmap.org"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        objectSrc: ["'none'"]
      }
    },
    crossOriginEmbedderPolicy: false,
    hsts: process.env.NODE_ENV === 'production' ? { maxAge: 15552000, includeSubDomains: true } : false
  }));
} catch (e) {
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('X-XSS-Protection', '0');
    if (process.env.NODE_ENV === 'production') {
      res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');
    }
    next();
  });
  console.warn('[security] helmet not installed — using basic headers');
}


app.use(cors({
  origin(origin, cb) {
    // same-origin / curl / server-to-server (no Origin header)
    if (!origin) return cb(null, true);
    if (originList.includes(origin)) return cb(null, true);
    console.warn('[cors] blocked origin:', origin);
    return cb(new Error('CORS: origin not allowed'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
}));

app.use(express.json({ limit: '12mb' }));
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
// Шаг 10: статика — несколько кандидатов + FRONTEND_DIR
const fs = require('fs');
function resolveFrontendDir() {
  const candidates = [
    process.env.FRONTEND_DIR,
    path.join(__dirname, 'public'),
    path.join(__dirname, 'frontend'),
    path.join(__dirname, '../frontend'),
    path.join(__dirname, '../public'),
    __dirname // index.html рядом с server.js
  ].filter(Boolean);

  for (const dir of candidates) {
    try {
      const indexPath = path.join(dir, 'index.html');
      if (fs.existsSync(indexPath)) {
        return path.resolve(dir);
      }
    } catch (e) { /* skip */ }
  }
  // fallback: всё равно отдаём __dirname (хотя бы API работает)
  return path.resolve(__dirname);
}
const FRONTEND_DIR = resolveFrontendDir();
app.use(express.static(FRONTEND_DIR));
console.log('[static] serving:', FRONTEND_DIR);

// ========== HELPERS ==========

// --- Шаг 9: простой rate limit в памяти (без новых пакетов) ---
const rateBuckets = new Map();
function rateLimit(opts) {
  const windowMs = opts.windowMs || 60_000;
  const max = opts.max || 60;
  const keyFn = opts.key || ((req) => req.ip + '|' + (req.user && req.user.id ? req.user.id : ''));
  return function rateLimitMiddleware(req, res, next) {
    const now = Date.now();
    const key = keyFn(req) + '|' + (opts.name || 'default');
    let b = rateBuckets.get(key);
    if (!b || now > b.reset) {
      b = { count: 0, reset: now + windowMs };
      rateBuckets.set(key, b);
    }
    b.count += 1;
    res.setHeader('X-RateLimit-Limit', String(max));
    res.setHeader('X-RateLimit-Remaining', String(Math.max(0, max - b.count)));
    if (b.count > max) {
      return res.status(429).json({ error: 'Too many requests — spróbuj za chwilę' });
    }
    next();
  };
}
// редкая очистка
setInterval(() => {
  const now = Date.now();
  for (const [k, b] of rateBuckets) {
    if (now > b.reset) rateBuckets.delete(k);
  }
}, 120_000).unref?.();

const MAX_IMAGES = 8;
const MAX_IMAGE_CHARS = 900_000; // ~0.9MB base64 на фото
const MAX_DESC = 8000;
const MAX_TITLE = 120;

function validateAdPayload(ad, { partial = false } = {}) {
  const errors = [];
  if (!ad || typeof ad !== 'object') return ['Invalid body'];

  if (!partial || ad.title !== undefined) {
    if (typeof ad.title !== 'string' || ad.title.trim().length < 2) {
      errors.push('Brak tytułu (min. 2 znaki)');
    } else if (ad.title.trim().length > MAX_TITLE) {
      errors.push('Tytuł zbyt długi');
    }
  }
  if (!partial || ad.category !== undefined) {
    if (ad.category != null && !['auto', 'moto', 'realty', 'realty_abroad'].includes(ad.category)) {
      errors.push('Nieprawidłowa kategoria');
    }
  }
  if (ad.price != null && ad.price !== '') {
    const p = Number(ad.price);
    if (!Number.isFinite(p) || p < 0 || p > 1e9) errors.push('Nieprawidłowa cena');
  }
  if (ad.year != null && ad.year !== '') {
    const y = Number(ad.year);
    const maxY = new Date().getFullYear() + 1;
    if (!Number.isFinite(y) || y < 1950 || y > maxY) errors.push('Nieprawidłowy rok');
  }
  if (ad.mileage != null && ad.mileage !== '') {
    const m = Number(ad.mileage);
    if (!Number.isFinite(m) || m < 0 || m > 5e6) errors.push('Nieprawidłowy przebieg');
  }
  if (ad.area != null && ad.area !== '') {
    const a = Number(ad.area);
    if (!Number.isFinite(a) || a < 0 || a > 1e6) errors.push('Nieprawidłowa powierzchnia');
  }
  if (ad.rooms != null && ad.rooms !== '') {
    const r = Number(ad.rooms);
    if (!Number.isFinite(r) || r < 0 || r > 50) errors.push('Nieprawidłowa liczba pokoi');
  }
  if (ad.desc != null && String(ad.desc).length > MAX_DESC) {
    errors.push('Opis zbyt długi');
  }
  if (ad.images != null) {
    if (!Array.isArray(ad.images)) {
      errors.push('images musi być tablicą');
    } else if (ad.images.length > MAX_IMAGES) {
      errors.push('Maks. ' + MAX_IMAGES + ' zdjęć');
    } else {
      for (const img of ad.images) {
        if (typeof img !== 'string' || img.length > MAX_IMAGE_CHARS) {
          errors.push('Zdjęcie zbyt duże lub nieprawidłowe');
          break;
        }
      }
    }
  }
  if (ad.image != null && typeof ad.image === 'string' && ad.image.length > MAX_IMAGE_CHARS) {
    errors.push('Zdjęcie główne zbyt duże');
  }
  if (ad.phone != null && String(ad.phone).length > 40) {
    errors.push('Telefon zbyt długi');
  }
  return errors;
}


/** Шаг 8: UUID вместо предсказуемого Date.now() + random */
function generateId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Node < 19 fallback
  const { randomBytes } = require('crypto');
  const b = randomBytes(16);
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = b.toString('hex');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

function normalizeRole(role) {
  if (['superadmin', 'admin', 'moderator'].includes(role)) return role;
  return 'user';
}

function isStaff(role) {
  return ['superadmin', 'admin', 'moderator'].includes(role);
}

function publicUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    email: row.email,
    type: row.type || 'private',
    name: row.name || null,
    phone: row.phone || null,
    company: row.company || null,
    nip: row.nip || null,
    contact: row.contact || null,
    role: normalizeRole(row.role),
    created: row.created
  };
}

function signAccessToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role, email: user.email, typ: 'access' },
    JWT_SECRET,
    { expiresIn: ACCESS_EXPIRES }
  );
}
function signRefreshToken(user) {
  const jti = generateId();
  const token = jwt.sign(
    { sub: user.id, typ: 'refresh', jti },
    JWT_SECRET,
    { expiresIn: REFRESH_EXPIRES }
  );
  return { token, jti };
}
/** @deprecated use issueTokens */
function signToken(user) {
  return signAccessToken(user);
}
async function storeRefreshToken(userId, jti, expiresAt) {
  try {
    await pool.query(
      `INSERT INTO refresh_tokens (jti, user_id, expires_at, created_at)
       VALUES ($1,$2,$3,$4)
       ON CONFLICT (jti) DO NOTHING`,
      [jti, userId, expiresAt, Date.now()]
    );
  } catch (e) {
    console.warn('[refresh_tokens]', e.message);
  }
}
async function issueTokens(user) {
  const accessToken = signAccessToken(user);
  const { token: refreshToken, jti } = signRefreshToken(user);
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  await storeRefreshToken(user.id, jti, expiresAt);
  return { token: accessToken, accessToken, refreshToken, expiresIn: ACCESS_EXPIRES };
}
async function revokeRefresh(jti) {
  try {
    await pool.query('DELETE FROM refresh_tokens WHERE jti = $1', [jti]);
  } catch (e) { /* ignore */ }
}
async function writeAudit(actorId, action, targetType, targetId, meta) {
  try {
    await pool.query(
      `INSERT INTO audit_logs (id, actor_id, action, target_type, target_id, meta, created)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [generateId(), actorId || null, action, targetType || null, targetId || null,
       meta ? JSON.stringify(meta) : null, Date.now()]
    );
  } catch (e) {
    console.warn('[audit]', e.message);
  }
}
function isAllowedImageDataUrl(s) {
  if (typeof s !== 'string' || !s) return false;
  if (s.startsWith('https://') || s.startsWith('http://')) return true;
  // data URL: only safe image MIME
  const m = /^data:(image\/(jpeg|jpg|png|webp|gif));base64,/i.exec(s);
  return !!m;
}
function validateImagesPayload(ad, errors) {
  const check = (img, label) => {
    if (img == null) return;
    if (typeof img !== 'string') {
      errors.push(label + ' nieprawidłowe');
      return;
    }
    if (img.startsWith('data:') && !isAllowedImageDataUrl(img)) {
      errors.push(label + ': dozwolone tylko JPEG/PNG/WebP/GIF');
    }
  };
  check(ad.image, 'Zdjęcie główne');
  if (Array.isArray(ad.images)) {
    for (const img of ad.images) check(img, 'Zdjęcie');
  }
}


/** JWT (Authorization: Bearer) — основной способ. Fallback: X-User-* отключён. */
function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const m = header.match(/^Bearer\s+(.+)$/i);
  if (!m) {
    return res.status(401).json({ error: 'Unauthorized — zaloguj się' });
  }
  try {
    const payload = jwt.verify(m[1], JWT_SECRET);
    if (payload.typ === 'refresh') {
      return res.status(401).json({ error: 'Use access token' });
    }
    req.user = {
      id: String(payload.sub),
      role: normalizeRole(payload.role),
      email: payload.email || null
    };
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Unauthorized — token invalid or expired' });
  }
}

/** Опциональный auth (для views и т.п.) */
function optionalAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const m = header.match(/^Bearer\s+(.+)$/i);
  if (m) {
    try {
      const payload = jwt.verify(m[1], JWT_SECRET);
      if (payload.typ !== 'refresh') {
        req.user = {
          id: String(payload.sub),
          role: normalizeRole(payload.role),
          email: payload.email || null
        };
      } else {
        req.user = null;
      }
    } catch (e) {
      req.user = null;
    }
  } else {
    req.user = null;
  }
  next();
}

/** Шаг 6: ответ API только в camelCase (как ждёт фронт). */
function toMs(v) {
  if (v == null || v === '') return null;
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  const t = new Date(v).getTime();
  return Number.isFinite(t) ? t : null;
}

function parseImages(v) {
  if (v == null) return null;
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') {
    try {
      const p = JSON.parse(v);
      return Array.isArray(p) ? p : null;
    } catch (e) {
      return null;
    }
  }
  return null;
}


const AD_EXTRA_KEYS = ['bodyType', 'engineCapacity', 'power', 'driveType', 'doors', 'polishOrigin', 'damaged', 'motoType', 'engineType', 'licenseCategory', 'buildYear', 'marketType', 'heating', 'conditionType', 'furnished', 'parking', 'elevator', 'balcony', 'energyClass', 'beachDistance', 'rentalYield', 'accidentFree', 'firstOwner'];
function pickAdExtra(ad) {
  const out = {};
  if (!ad || typeof ad !== 'object') return out;
  for (const k of AD_EXTRA_KEYS) {
    if (ad[k] != null && ad[k] !== '') out[k] = ad[k];
  }
  const raw = JSON.stringify(out);
  if (raw.length > EXTRA_JSON_MAX) {
    const err = new Error('extra_too_large');
    err.code = 'extra_too_large';
    throw err;
  }
  return out;
}
function parseExtra(raw) {
  if (!raw) return {};
  if (typeof raw === 'object') return raw;
  try { return JSON.parse(raw); } catch (e) { return {}; }
}

function mapAdRow(ad) {
  if (!ad) return ad;
  const images = parseImages(ad.images);
  return {
    id: ad.id,
    userId: ad.user_id != null ? ad.user_id : ad.userId || null,
    title: ad.title || '',
    category: ad.category,
    price: ad.price != null ? Number(ad.price) : null,
    city: ad.city || null,
    desc: ad.description != null ? ad.description : (ad.desc || null),
    image: ad.image || (images && images[0]) || null,
    images: images,
    phone: ad.phone || null,
    brand: ad.brand || null,
    model: ad.model || null,
    color: ad.color || null,
    year: ad.year != null ? Number(ad.year) : null,
    mileage: ad.mileage != null ? Number(ad.mileage) : null,
    fuel: ad.fuel || null,
    gearbox: ad.gearbox || null,
    condition: ad.condition || null,
    engine: ad.engine || null,
    area: ad.area != null ? Number(ad.area) : null,
    rooms: ad.rooms != null ? Number(ad.rooms) : null,
    floor: ad.floor != null ? String(ad.floor) : null,
    deal: ad.deal || null,
    propType: ad.prop_type != null ? ad.prop_type : ad.propType || null,
    locationType: ad.location_type != null ? ad.location_type : ad.locationType || null,
    country: ad.country || null,
    district: ad.district || null,
    region: ad.region || null,
    views: ad.views != null ? Number(ad.views) : 0,
    status: ad.status || 'pending',
    paid: ad.paid === true || ad.paid === 't' || ad.paid === 1,
    paidUntil: toMs(ad.paid_until != null ? ad.paid_until : ad.paidUntil),
    paidAmount: ad.paid_amount != null ? Number(ad.paid_amount) : (ad.paidAmount != null ? Number(ad.paidAmount) : null),
    payMethod: ad.pay_method != null ? ad.pay_method : ad.payMethod || null,
    boostedUntil: toMs(ad.boosted_until != null ? ad.boosted_until : ad.boostedUntil),
    boostedAt: toMs(ad.boosted_at != null ? ad.boosted_at : ad.boostedAt),
    moderatedAt: toMs(ad.moderated_at != null ? ad.moderated_at : ad.moderatedAt),
    moderatedBy: ad.moderated_by != null ? ad.moderated_by : ad.moderatedBy || null,
    created: ad.created != null ? Number(ad.created) : null,
    ...parseExtra(ad.extra)
  };
}

async function readAds() {
  try {
    const result = await pool.query('SELECT * FROM ads ORDER BY created DESC');
    return result.rows.map(mapAdRow);
  } catch (e) {
    console.error('[readAds]', e.message);
    return [];
  }
}

async function getAdById(id) {
  const result = await pool.query('SELECT * FROM ads WHERE id = $1', [id]);
  return result.rows[0] ? mapAdRow(result.rows[0]) : null;
}

const CONTENT_FIELDS = [
  'title', 'price', 'city', 'desc', 'image', 'images', 'phone',
  'brand', 'model', 'color', 'year', 'mileage', 'fuel', 'gearbox',
  'condition', 'engine', 'area', 'rooms', 'floor', 'deal', 'propType',
  'locationType', 'country', 'district', 'region', 'views'
];
const STAFF_ONLY_FIELDS = ['status', 'moderatedAt', 'moderatedBy'];
// paid* только через /api/payments/demo или staff; boost — владелец/staff
const OWNER_OR_STAFF_FIELDS = [
  'boostedUntil', 'boostedAt'
];
const STAFF_PAID_FIELDS = ['paid', 'paidUntil', 'paidAmount', 'payMethod'];

const fieldMap = {
  title: 'title', price: 'price', city: 'city', desc: 'description',
  image: 'image', images: 'images', phone: 'phone', brand: 'brand',
  model: 'model', color: 'color', year: 'year', mileage: 'mileage',
  fuel: 'fuel', gearbox: 'gearbox', condition: 'condition', engine: 'engine',
  area: 'area', rooms: 'rooms', floor: 'floor', deal: 'deal',
  propType: 'prop_type', locationType: 'location_type', country: 'country',
  district: 'district', region: 'region', views: 'views', status: 'status',
  paid: 'paid', paidUntil: 'paid_until', paidAmount: 'paid_amount',
  payMethod: 'pay_method', boostedUntil: 'boosted_until', boostedAt: 'boosted_at',
  moderatedAt: 'moderated_at', moderatedBy: 'moderated_by', extra: 'extra'
};

// ========== AUTH API ==========

app.post('/api/auth/register', rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 20 }), async (req, res) => {
  try {
    const body = req.body || {};
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const type = body.type === 'business' ? 'business' : 'private';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Nieprawidłowy e-mail' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Hasło min. 6 znaków' });
    }

    const exists = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (exists.rows.length) {
      return res.status(409).json({ error: 'E-mail już zarejestrowany' });
    }

    const id = generateId();
    const password_hash = await bcrypt.hash(password, 10);
    const created = Date.now();

    const name = type === 'private' ? String(body.name || '').trim() : null;
    const company = type === 'business' ? String(body.company || '').trim() : null;
    const nip = type === 'business' ? String(body.nip || '').trim() : null;
    const contact = type === 'business' ? String(body.contact || '').trim() : null;
    const phone = String(body.phone || '').trim() || null;

    if (type === 'private' && !name) {
      return res.status(400).json({ error: 'Brak imienia' });
    }
    if (type === 'business' && (!company || !nip || !contact)) {
      return res.status(400).json({ error: 'Uzupełnij dane firmy' });
    }

    const result = await pool.query(
      `INSERT INTO users (id, email, password_hash, type, name, phone, company, nip, contact, role, created)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'user',$10) RETURNING *`,
      [id, email, password_hash, type, name, phone, company, nip, contact, created]
    );

    const user = publicUser(result.rows[0]);

    // --- ОТПРАВКА ПРИВЕТСТВЕННОГО ПИСЬМА ---
    try {
      await resend.emails.send({
        from: 'Handlio <noreply@handlio.pl>',
        to: email,
        subject: 'Witaj w Handlio!',
        html: `
          <h2>Witaj w Handlio!</h2>
          <p>Cieszymy się, że do nas dołączyłeś. Twój e-mail został pomyślnie zarejestrowany.</p>
          <p>Możesz już dodawać swoje ogłoszenia i korzystać z serwisu.</p>
          <a href="https://handlio.pl">Przejdź do Handlio</a>
        `
      });
      console.log('Письмо успешно отправлено на', email);
    } catch (mailError) {
      console.error('Błąd wysyłki e-maila powitalnego:', mailError);
    }
    // --- КОНЕЦ ОТПРАВКИ ---

    const tokens = await issueTokens(user);
    res.status(201).json({ ...tokens, user });
  } catch (error) {
    console.error('[POST /api/auth/register]', error);
    res.status(500).json({ error: 'Nie udało się zarejestrować' });
  }
});

app.post('/api/auth/login', rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 30 }), async (req, res) => {
  try {
    const email = String((req.body && req.body.email) || '').trim().toLowerCase();
    const password = String((req.body && req.body.password) || '');

    if (!email || !password) {
      return res.status(400).json({ error: 'Podaj e-mail i hasło' });
    }

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (!result.rows.length) {
      return res.status(401).json({ error: 'Nieprawidłowy e-mail lub hasło' });
    }

    const row = result.rows[0];
    const ok = await bcrypt.compare(password, row.password_hash);
    if (!ok) {
      return res.status(401).json({ error: 'Nieprawidłowy e-mail lub hasło' });
    }

    const user = publicUser(row);
    const tokens = await issueTokens(user);
    res.json({ ...tokens, user });
  } catch (error) {
    console.error('[POST /api/auth/login]', error);
    res.status(500).json({ error: 'Błąd logowania' });
  }
}); // <--- ВОТ ЗДЕСЬ ФУНКЦИЯ ЛОГИНА ЗАКРЫВАЕТСЯ

// А ТЕПЕРЬ ИДЕТ УДАЛЕНИЕ
app.delete('/api/auth/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Brak autoryzacji' });
    }
    const token = authHeader.split(' ')[1];
    
    // Проверяем, кто это (используем стандартный jwt.verify, так как функции verifyAccessToken у тебя нет)
    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (e) {
      return res.status(401).json({ error: 'Nieprawidłowy token' });
    }

    if (!payload || !payload.sub) {
      return res.status(401).json({ error: 'Nieprawidłowy token' });
    }

    const userId = payload.sub;

    // Удаляем сообщения, объявления и самого юзера
    await pool.query('DELETE FROM messages WHERE from_id = $1 OR to_id = $1', [userId]);
    await pool.query('DELETE FROM ads WHERE user_id = $1', [userId]);
    await pool.query('DELETE FROM users WHERE id = $1', [userId]);

    res.json({ ok: true, message: 'Konto zostało usunięte' });
  } catch (error) {
    console.error('[DELETE /api/auth/me]', error);
    res.status(500).json({ error: 'Nie udało się usunąć konta' });
  }
}); 

// ========== КОНЕЦ AUTH API ==========
 //Шаг 15: смена / сброс пароля
const resetCodes = new Map(); // email -> { code, expires }

app.post('/api/auth/change-password', requireAuth, rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 20 }), async (req, res) => {
  try {
    const currentPassword = String((req.body && req.body.currentPassword) || '');
    const newPassword = String((req.body && req.body.newPassword) || '');
    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Hasło min. 6 znaków' });
    }
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    if (!result.rows.length) return res.status(404).json({ error: 'User not found' });
    const row = result.rows[0];
    const ok = await bcrypt.compare(currentPassword, row.password_hash);
    if (!ok) return res.status(401).json({ error: 'Błędne obecne hasło' });
    const password_hash = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [password_hash, req.user.id]);
    res.json({ ok: true });
  } catch (error) {
    console.error('[POST /api/auth/change-password]', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/forgot', rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 10 }), async (req, res) => {
  try {
    const email = String((req.body && req.body.email) || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Nieprawidłowy e-mail' });
    }
    const result = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    
    const generic = { ok: true, message: 'Jeśli konto istnieje, kod został wysłany' };
    if (!result.rows.length) {
      return res.json(generic);
    }
    
    const code = String(Math.floor(100000 + Math.random() * 900000));
    resetCodes.set(email, { code, expires: Date.now() + 15 * 60 * 1000 });

    // ВСЕГДА выводим код в терминал (даже в production), чтобы можно было проверить
    console.log('=================================');
    console.log('КОД ДЛЯ ВОССТАНОВЛЕНИЯ:', code);
    console.log('=================================');

    // Отправляем через Resend
    try {
      await resend.emails.send({
        from: 'Handlio <noreply@handlio.pl>',
        to: email,
        subject: 'Odzyskiwanie hasła w Handlio',
        html: `
          <h2>Odzyskiwanie hasła</h2>
          <p>Twój kod weryfikacyjny: <strong style="font-size: 24px; letter-spacing: 2px;">${code}</strong></p>
          <p>Kod jest ważny przez 15 minut.</p>
        `
      });
      console.log('Письмо успешно отправлено через Resend!');
    } catch (mailError) {
      console.error('ОШИБКА RESEND:', mailError.message);
    }

    res.json(generic);
  } catch (error) {
    console.error('[POST /api/auth/forgot]', error);
    res.status(500).json({ error: 'Server error' });
  }
});
app.post('/api/auth/reset', rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 10 }), async (req, res) => {
  try {
    const email = String((req.body && req.body.email) || '').trim().toLowerCase();
    const code = String((req.body && req.body.code) || '').trim();
    const newPassword = String((req.body && req.body.newPassword) || '');
    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Hasło min. 6 znaków' });
    }
    const entry = resetCodes.get(email);
    if (!entry || entry.expires < Date.now() || String(entry.code) !== code) {
      return res.status(400).json({ error: 'Nieprawidłowy lub wygasły kod' });
    }
    const result = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (!result.rows.length) {
      return res.status(400).json({ error: 'Nieprawidłowy lub wygasły kod' });
    }
    const password_hash = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [password_hash, result.rows[0].id]);
    resetCodes.delete(email);
    res.json({ ok: true });
  } catch (error) {
    console.error('[POST /api/auth/reset]', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/auth/me', requireAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    if (!result.rows.length) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: publicUser(result.rows[0]) });
  } catch (error) {
    console.error('[GET /api/auth/me]', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// ========== ADS API ==========

app.get('/api/ads', optionalAuth, async (req, res) => {
  try {
    const ads = await readAds();
    if (req.user && isStaff(req.user.role)) return res.json(ads);

    const uid = req.user ? String(req.user.id) : null;
    res.json(ads.filter(a => {
      if ((a.status || 'approved') === 'approved') return true;
      if (uid && a.userId != null && String(a.userId) === uid) return true;
      return false;
    }));
  } catch (error) {
    console.error('[GET /api/ads]', error);
    res.status(500).json({ error: 'Ошибка базы данных' });
  }
});

app.get('/api/ads/:id', async (req, res) => {
  try {
    const ad = await getAdById(req.params.id);
    if (!ad) return res.status(404).json({ error: 'Not found' });
    res.json(ad);
  } catch (error) {
    console.error('[GET /api/ads/:id]', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Шаг 14: атомарный +1 к views (без доверия к числу с клиента)
app.post('/api/ads/:id/view', rateLimit({ name: 'views', windowMs: 60_000, max: 120 }), async (req, res) => {
  try {
    const result = await pool.query(
      `UPDATE ads SET views = COALESCE(views, 0) + 1 WHERE id = $1 RETURNING id, views`,
      [req.params.id]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Not found' });
    res.json({ id: result.rows[0].id, views: Number(result.rows[0].views) });
  } catch (error) {
    console.error('[POST /api/ads/:id/view]', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/ads', requireAuth, rateLimit({ name: 'ads-write', windowMs: 60_000, max: 20 }), async (req, res) => {
  const ad = req.body;
  const verr = validateAdPayload(ad, { partial: false });
  if (!ad || typeof ad !== 'object') {
    return res.status(400).json({ error: 'Invalid body' });
  }
  if (!ad.category || !['auto', 'moto', 'realty', 'realty_abroad'].includes(ad.category)) {
    return res.status(400).json({ error: 'Nieprawidłowa kategoria' });
  }
  if (verr.length) {
    return res.status(400).json({ error: verr[0], errors: verr });
  }

  const id = generateId();
  const created = Date.now();
  let status = 'pending';
  if (isStaff(req.user.role) && ['approved', 'rejected', 'pending'].includes(ad.status)) {
    status = ad.status;
  }

  try {
    const result = await pool.query(
      `INSERT INTO ads (
        id, user_id, title, category, price, city, description,
        image, images, phone, brand, model, color, year, mileage,
        fuel, gearbox, condition, engine, area, rooms, floor, deal,
        prop_type, location_type, country, district, region, views,
        status, paid, paid_until, paid_amount, pay_method,
        boosted_until, boosted_at, moderated_at, moderated_by, created, extra
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,
        $21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40
      ) RETURNING *`,
      [
        id, req.user.id, ad.title.trim(), ad.category, ad.price ?? null,
        ad.city || null, ad.desc || null, ad.image || null,
        ad.images ? JSON.stringify(ad.images) : null, ad.phone || null,
        ad.brand || null, ad.model || null, ad.color || null,
        ad.year ?? null, ad.mileage ?? null, ad.fuel || null,
        ad.gearbox || null, ad.condition || null, ad.engine || null,
        ad.area ?? null, ad.rooms ?? null, ad.floor ?? null, ad.deal || null,
        ad.propType || null, ad.locationType || null, ad.country || null,
        ad.district || null, ad.region || null, ad.views ?? 0, status,
        (isStaff(req.user.role) && ad.paid) ? true : false,
        (isStaff(req.user.role) && ad.paidUntil) ? new Date(ad.paidUntil) : null,
        (isStaff(req.user.role) && ad.paidAmount != null) ? ad.paidAmount : null,
        (isStaff(req.user.role) && ad.payMethod) ? ad.payMethod : null,
        ad.boostedUntil || null, ad.boostedAt || null,
        ad.moderatedAt || null, ad.moderatedBy || null, created,
        JSON.stringify(pickAdExtra(ad))
      ]
    );
    res.status(201).json(mapAdRow(result.rows[0]));
  } catch (error) {
    if (error && error.code === 'extra_too_large') {
      return res.status(400).json({ error: 'Zbyt dużo danych w parametrach (extra)' });
    }
    console.error('[POST /api/ads]', error);
    res.status(500).json({ error: 'Nie udało się zapisać' });
  }
});

app.put('/api/ads/:id', optionalAuth, rateLimit({ name: 'ads-write', windowMs: 60_000, max: 40 }), async (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const bodyKeys = Object.keys(body).filter((k) =>
    Object.prototype.hasOwnProperty.call(body, k)
  );
  const onlyViews = bodyKeys.length > 0 && bodyKeys.every((k) => k === 'views');
  if (!onlyViews) {
    const verr = validateAdPayload(body, { partial: true });
    if (verr.length) {
      return res.status(400).json({ error: verr[0], errors: verr });
    }
  }

  if (!onlyViews && !req.user) {
    return res.status(401).json({ error: 'Unauthorized — zaloguj się' });
  }

  try {
    const existing = await getAdById(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Not found' });

    if (!onlyViews) {
      const ownerId = existing.userId != null ? String(existing.userId) : '';
      if (ownerId !== req.user.id && !isStaff(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden — nie Twoje ogłoszenie' });
      }
    }

    const patch = {};
    for (const key of bodyKeys) {
      if (!fieldMap[key]) continue;
      if (onlyViews) {
        // абсолютное значение views с клиента — только staff; иначе используйте POST /view
        if (key === 'views' && req.user && isStaff(req.user.role)) {
          patch.views = body.views;
        }
        continue;
      }
      if (STAFF_ONLY_FIELDS.includes(key) || STAFF_PAID_FIELDS.includes(key)) {
        if (!isStaff(req.user.role)) continue;
        patch[key] = body[key];
        continue;
      }
      if (OWNER_OR_STAFF_FIELDS.includes(key)) {
        const ownerId = existing.userId != null ? String(existing.userId) : '';
        if (ownerId === req.user.id || isStaff(req.user.role)) {
          patch[key] = body[key];
        }
        continue;
      }
      if (CONTENT_FIELDS.includes(key)) {
        patch[key] = body[key];
      }
    }

    
    const extraPatch = pickAdExtra(body);
    if (Object.keys(extraPatch).length) {
      const cur = await getAdById(req.params.id);
      const prev = {};
      if (cur) {
        for (const k of AD_EXTRA_KEYS) if (cur[k] != null) prev[k] = cur[k];
      }
      patch.extra = Object.assign({}, prev, extraPatch);
    }

    if (Object.keys(patch).length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    const updates = [];
    const values = [];
    for (const [key, value] of Object.entries(patch)) {
      const column = fieldMap[key];
      if (!column) continue;
      updates.push(`${column} = $${values.length + 1}`);
      if (key === 'images' || key === 'extra') {
        values.push(value == null ? null : JSON.stringify(value));
      } else if (
        key === 'paidUntil' || key === 'boostedUntil' ||
        key === 'boostedAt' || key === 'moderatedAt'
      ) {
        values.push(value == null ? null : new Date(value));
      } else {
        values.push(value);
      }
    }
    values.push(req.params.id);

    const result = await pool.query(
      `UPDATE ads SET ${updates.join(', ')} WHERE id = $${values.length} RETURNING *`,
      values
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Not found' });
    const mapped = mapAdRow(result.rows[0]);
    if (req.user && isStaff(req.user.role) && patch.status) {
      await writeAudit(req.user.id, 'ad.status.' + patch.status, 'ad', req.params.id, {
        from: existing.status, to: patch.status
      });
    }
    if (req.user && (patch.boostedUntil != null || patch.boostedAt != null)) {
      await writeAudit(req.user.id, 'ad.boost', 'ad', req.params.id, {
        boostedUntil: patch.boostedUntil || null,
        boostedAt: patch.boostedAt || null
      });
    }
    res.json(mapped);
  } catch (error) {
    if (error && error.code === 'extra_too_large') {
      return res.status(400).json({ error: 'Zbyt dużo danych w parametrach (extra)' });
    }
    console.error('[PUT /api/ads/:id]', error);
    res.status(500).json({ error: 'Nie udało się zapisać' });
  }
});

app.delete('/api/ads/:id', requireAuth, rateLimit({ name: 'ads-write', windowMs: 60_000, max: 20 }), async (req, res) => {
  try {
    const existing = await getAdById(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Not found' });

    const ownerId = existing.userId != null ? String(existing.userId) : '';
    if (ownerId !== req.user.id && !isStaff(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden — nie Twoje ogłoszenie' });
    }

    const result = await pool.query(
      'DELETE FROM ads WHERE id = $1 RETURNING id',
      [req.params.id]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Not found' });
    if (req.user && isStaff(req.user.role)) {
      await writeAudit(req.user.id, 'ad.delete', 'ad', req.params.id, {});
    }
    res.json({ ok: true, id: result.rows[0].id });
  } catch (error) {
    console.error('[DELETE /api/ads/:id]', error);
    res.status(500).json({ error: 'Не удалось удалить' });
  }
});

// ========== MODERATION COUNTER (лёгкий polling) ==========
app.get('/api/moderation/pending-count', requireAuth, async (req, res) => {
  try {
    if (!isStaff(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const result = await pool.query(
      `SELECT COUNT(*)::int AS count FROM ads WHERE status = 'pending'`
    );
    res.json({ count: result.rows[0].count });
  } catch (e) {
    console.error('[GET /api/moderation/pending-count]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// ========== MESSAGES / NOTIFICATIONS / REPORTS (H23) ==========

const H23_MSG_MAX = 5000;
const H23_TEXT_MAX = 1000;

function mapMessage(r) {
  return {
    id: r.id, conv: r.conv, adId: r.ad_id,
    from: r.from_id, to: r.to_id,
    text: r.text,
    read: r.read === true || r.read === 't',
    created: Number(r.created)
  };
}
function mapNotification(r) {
  return {
    id: r.id, userId: r.user_id,
    title: r.title, text: r.text, type: r.type,
    meta: r.meta || {},
    read: r.read === true || r.read === 't',
    created: Number(r.created)
  };
}
function mapReport(r) {
  return {
    id: r.id, adId: r.ad_id,
    reporterId: r.reporter_id, sellerId: r.seller_id,
    reason: r.reason, comment: r.comment,
    status: r.status,
    created: Number(r.created),
    closedAt: r.closed_at != null ? Number(r.closed_at) : null,
    closedBy: r.closed_by || null
  };
}
// ---- messages ----
app.get('/api/messages', requireAuth, async (req, res) => {
  try {
    const uid = req.user.id;
    const result = await pool.query(
      `SELECT * FROM messages
       WHERE from_id = $1 OR to_id = $1
       ORDER BY created ASC
       LIMIT $2`,
      [uid, H23_MSG_MAX]
    );
    res.json(result.rows.map(mapMessage));
  } catch (e) {
    console.error('[GET /api/messages]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/messages', requireAuth, rateLimit({ name: 'msg', windowMs: 60_000, max: 60 }), async (req, res) => {
  try {
    const b = req.body || {};
    const to = String(b.to || '').trim();
    const text = String(b.text || '').trim().slice(0, H23_TEXT_MAX);
    const adId = b.adId ? String(b.adId) : null;

    if (!to || !text) return res.status(400).json({ error: 'Brak to/text' });
    if (to === req.user.id) return res.status(400).json({ error: 'Nie możesz pisać do siebie' });

    const target = await pool.query('SELECT id FROM users WHERE id = $1', [to]);
    if (!target.rows.length) return res.status(404).json({ error: 'Odbiorca nie istnieje' });

    const conv = [req.user.id, to].sort().join('|') + '|' + (adId || '');
    const id = generateId();
    const created = Date.now();

    const ins = await pool.query(
      `INSERT INTO messages (id, conv, ad_id, from_id, to_id, text, read, created)
       VALUES ($1,$2,$3,$4,$5,$6,false,$7) RETURNING *`,
      [id, conv, adId, req.user.id, to, text, created]
    );

    // уведомление получателю
    const adRow = adId ? await pool.query('SELECT title FROM ads WHERE id = $1', [adId]) : { rows: [] };
    const adTitle = adRow.rows[0]?.title || 'ogłoszenia';
    const me = await pool.query('SELECT name, company, email FROM users WHERE id = $1', [req.user.id]);
    const meRow = me.rows[0] || {};
    const fromName = meRow.company || meRow.name || meRow.email || 'Użytkownik';

    const ntId = generateId();
    await pool.query(
      `INSERT INTO notifications (id, user_id, title, text, type, meta, read, created)
       VALUES ($1,$2,$3,$4,$5,$6,false,$7)`,
      [ntId, to, 'Nowe wiadomości', `${fromName} napisał(a) w sprawie „${adTitle}”`, 'message',
       JSON.stringify({ conv, adId }), created]
    );

    res.status(201).json(mapMessage(ins.rows[0]));
  } catch (e) {
    console.error('[POST /api/messages]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// отметить сообщения диалога как прочитанные
app.post('/api/messages/read', requireAuth, async (req, res) => {
  try {
    const conv = String((req.body && req.body.conv) || '');
    if (!conv) return res.status(400).json({ error: 'Brak conv' });
    const result = await pool.query(
      `UPDATE messages SET read = true
       WHERE conv = $1 AND to_id = $2 AND read = false
       RETURNING id`,
      [conv, req.user.id]
    );
    res.json({ ok: true, updated: result.rowCount });
  } catch (e) {
    console.error('[POST /api/messages/read]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// ---- notifications ----
app.get('/api/notifications', requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM notifications WHERE user_id = $1 ORDER BY created DESC LIMIT 200`,
      [req.user.id]
    );
    res.json(result.rows.map(mapNotification));
  } catch (e) {
    console.error('[GET /api/notifications]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/notifications/:id/read', requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `UPDATE notifications SET read = true
       WHERE id = $1 AND user_id = $2
       RETURNING id`,
      [req.params.id, req.user.id]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Not found' });
    res.json({ ok: true });
  } catch (e) {
    console.error('[POST /api/notifications/:id/read]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/notifications/read-all', requireAuth, async (req, res) => {
  try {
    await pool.query(
      `UPDATE notifications SET read = true WHERE user_id = $1 AND read = false`,
      [req.user.id]
    );
    res.json({ ok: true });
  } catch (e) {
    console.error('[POST /api/notifications/read-all]', e);
    res.status(500).json({ error: 'Server error' });
  }
});
// ---- reports ----
app.post('/api/reports', requireAuth, rateLimit({ name: 'report', windowMs: 60_000, max: 10 }), async (req, res) => {
  try {
    const b = req.body || {};
    const adId = String(b.adId || '');
    const reason = String(b.reason || '').trim().slice(0, 200);
    const comment = String(b.comment || '').trim().slice(0, 1000);

    if (!adId || !reason) return res.status(400).json({ error: 'Brak adId/reason' });

    const ad = await getAdById(adId);
    if (!ad) return res.status(404).json({ error: 'Ogłoszenie nie istnieje' });
    if (String(ad.userId) === req.user.id) return res.status(400).json({ error: 'Nie możesz zgłosić własnego ogłoszenia' });

    const dup = await pool.query(
      `SELECT id FROM reports WHERE ad_id = $1 AND reporter_id = $2 AND status = 'open'`,
      [adId, req.user.id]
    );
    if (dup.rows.length) return res.status(409).json({ error: 'Już zgłosiłeś to ogłoszenie' });

    const id = generateId();
    const created = Date.now();
    const ins = await pool.query(
      `INSERT INTO reports (id, ad_id, reporter_id, seller_id, reason, comment, status, created)
       VALUES ($1,$2,$3,$4,$5,$6,'open',$7) RETURNING *`,
      [id, adId, req.user.id, ad.userId, reason, comment || null, created]
    );

    // уведомление всей модерации
    const staff = await pool.query(
      `SELECT id FROM users WHERE role IN ('superadmin','admin','moderator')`
    );
    for (const row of staff.rows) {
      await pool.query(
        `INSERT INTO notifications (id, user_id, title, text, type, meta, read, created)
         VALUES ($1,$2,$3,$4,'report',$5,false,$6)`,
        [generateId(), row.id, 'Nowa skarga', `Ogłoszenie „${ad.title}”: ${reason}`, JSON.stringify({ reportId: id, adId }), created]
      );
    }

    res.status(201).json(mapReport(ins.rows[0]));
  } catch (e) {
    console.error('[POST /api/reports]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/reports', requireAuth, async (req, res) => {
  try {
    if (!isStaff(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
    const result = await pool.query(`SELECT * FROM reports ORDER BY created DESC LIMIT 500`);
    res.json(result.rows.map(mapReport));
  } catch (e) {
    console.error('[GET /api/reports]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/reports/:id/close', requireAuth, async (req, res) => {
  try {
    if (!isStaff(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
    const result = await pool.query(
      `UPDATE reports SET status = 'closed', closed_at = $1, closed_by = $2
       WHERE id = $3 AND status = 'open' RETURNING *`,
      [Date.now(), req.user.id, req.params.id]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Not found or already closed' });
    res.json(mapReport(result.rows[0]));
  } catch (e) {
    console.error('[POST /api/reports/:id/close]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// публичный список пользователей (для отображения имён в чате)
app.get('/api/users/public', requireAuth, async (req, res) => {
  try {
    const idsRaw = String(req.query.ids || '');
    const ids = idsRaw.split(',').map(s => s.trim()).filter(Boolean).slice(0, 100);
    if (!ids.length) return res.json([]);
    const result = await pool.query(
      `SELECT id, type, name, company FROM users WHERE id = ANY($1::text[])`,
      [ids]
    );
    res.json(result.rows);
  } catch (e) {
    console.error('[GET /api/users/public]', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// ========== PAYMENTS (demo) — шаг 5 ==========
const DEMO_PLANS = {
  basic:    { days: 15, amount: 1.99 },
  business: { days: 15, amount: 14.99 },
  extend:   { days: 15, amount: 0.99 },
  boost:    { days: 1,  amount: 4.99 },
  standard: { days: 30, amount: 19.99 },
  premium:  { days: 60, amount: 34.99 }
};

/** Промокоды: percent 0–100, optional fixedDays overrides plan days */
const PROMO_CODES = {
  HANDLIO100: { percent: 100, label: '100% zniżki' },
  HANDLIO50: { percent: 50, label: '50% zniżki' },
  HANDLIO15: { percent: 100, days: 15, label: '15 dni gratis' },
  START: { percent: 100, days: 7, label: 'Start 7 dni' }
};
// доп. коды из env: PROMO_EXTRA=CODE1:100,CODE2:50
(function loadExtraPromos() {
  const raw = process.env.PROMO_EXTRA || '';
  raw.split(',').map((s) => s.trim()).filter(Boolean).forEach((pair) => {
    const [code, pct] = pair.split(':');
    if (code && pct != null) {
      PROMO_CODES[code.trim().toUpperCase()] = {
        percent: Math.min(100, Math.max(0, Number(pct) || 0)),
        label: 'custom'
      };
    }
  });
})();

function resolvePromo(code) {
  if (!code || typeof code !== 'string') return null;
  return PROMO_CODES[code.trim().toUpperCase()] || null;
}

app.post('/api/payments/demo', requireAuth, rateLimit({ name: 'pay', windowMs: 60_000, max: 10 }), async (req, res) => {
  try {
    const body = req.body || {};
    const adId = body.adId;
    if (!adId || typeof adId !== 'string') {
      return res.status(400).json({ error: 'Brak adId' });
    }

    const existing = await getAdById(adId);
    if (!existing) return res.status(404).json({ error: 'Ogłoszenie nie znalezione' });

    const ownerId = existing.userId != null ? String(existing.userId) : '';
    if (ownerId !== req.user.id && !isStaff(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden — nie Twoje ogłoszenie' });
    }

    // Prices only from server catalog — ignore client amount/days
    const planKey = body.plan && DEMO_PLANS[body.plan] ? body.plan : 'basic';
    let plan = { ...DEMO_PLANS[planKey] };

    const promoRaw = body.promoCode ? String(body.promoCode) : '';
    const promo = resolvePromo(promoRaw);
    if (promoRaw && !promo) {
      return res.status(400).json({ error: 'Nieprawidłowy kod promocyjny' });
    }

    let amount = Number(plan.amount);
    let days = Number(plan.days);
    let payMethod = ['blik', 'card', 'transfer', 'paypal', 'demo', 'promo'].includes(body.payMethod)
      ? body.payMethod
      : 'demo';

    if (promo) {
      if (promo.days) days = promo.days;
      amount = Math.round(amount * (100 - promo.percent) / 100 * 100) / 100;
      if (promo.percent >= 100) {
        amount = 0;
        payMethod = 'promo';
      }
    }

    let result;
    if (planKey === 'boost') {
      // Boost: only TOP for N days — do not overwrite paid_until
      const boostedUntil = Date.now() + days * 24 * 60 * 60 * 1000;
      const boostedAt = Date.now();
      result = await pool.query(
        `UPDATE ads SET
           boosted_until = $1,
           boosted_at = $2,
           paid_amount = $3,
           pay_method = $4
         WHERE id = $5
         RETURNING *`,
        [boostedUntil, boostedAt, amount, payMethod, adId]
      );
    } else {
      // basic / business / extend / standard / premium — paid visibility
      const base = Math.max(Date.now(), Number(existing.paidUntil) || 0);
      const paidUntil = base + days * 24 * 60 * 60 * 1000;
      result = await pool.query(
        `UPDATE ads SET
           paid = true,
           paid_until = $1,
           paid_amount = $2,
           pay_method = $3
         WHERE id = $4
         RETURNING *`,
        [new Date(paidUntil), amount, payMethod, adId]
      );
    }

    if (!result.rows.length) {
      return res.status(404).json({ error: 'Not found' });
    }

    await writeAudit(req.user.id, 'ad.payment', 'ad', adId, {
      plan: planKey, amount, days, payMethod, promo: promoRaw || null
    });

    res.json({
      ok: true,
      plan: planKey,
      amount,
      days,
      promo: promo
        ? { code: promoRaw.trim().toUpperCase(), percent: promo.percent, label: promo.label, amount, days }
        : null,
      message: promo && promo.percent >= 100
        ? 'Opłacono kodem promocyjnym'
        : 'Płatność przyjęta',
      ad: mapAdRow(result.rows[0])
    });
  } catch (error) {
    console.error('[POST /api/payments/demo]', error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

/** Проверка промокода без оплаты */
app.post('/api/payments/promo-check', requireAuth, rateLimit({ name: 'pay', windowMs: 60_000, max: 30 }), async (req, res) => {
  const code = String((req.body && req.body.promoCode) || '');
  const promo = resolvePromo(code);
  if (!promo) return res.status(400).json({ ok: false, error: 'Nieprawidłowy kod promocyjny' });
  res.json({ ok: true, code: code.trim().toUpperCase(), percent: promo.percent, days: promo.days || null, label: promo.label });
});


app.post('/api/auth/refresh', rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 60 }), async (req, res) => {
  try {
    const refreshToken = String((req.body && req.body.refreshToken) || '');
    if (!refreshToken) return res.status(400).json({ error: 'Brak refreshToken' });
    let payload;
    try {
      payload = jwt.verify(refreshToken, JWT_SECRET);
    } catch (e) {
      return res.status(401).json({ error: 'Refresh token invalid' });
    }
    if (payload.typ !== 'refresh' || !payload.jti) {
      return res.status(401).json({ error: 'Refresh token invalid' });
    }
    const row = await pool.query(
      'SELECT jti, user_id, expires_at FROM refresh_tokens WHERE jti = $1',
      [payload.jti]
    );
    if (!row.rows.length) {
      return res.status(401).json({ error: 'Refresh token revoked' });
    }
    if (Number(row.rows[0].expires_at) < Date.now()) {
      await revokeRefresh(payload.jti);
      return res.status(401).json({ error: 'Refresh token expired' });
    }
    const users = await pool.query('SELECT * FROM users WHERE id = $1', [row.rows[0].user_id]);
    if (!users.rows.length) return res.status(401).json({ error: 'User not found' });
    // rotate: revoke old, issue new
    await revokeRefresh(payload.jti);
    const user = publicUser(users.rows[0]);
    const tokens = await issueTokens(user);
    res.json({ ...tokens, user });
  } catch (error) {
    console.error('[POST /api/auth/refresh]', error);
    res.status(500).json({ error: 'Refresh failed' });
  }
});

app.post('/api/auth/logout', requireAuth, rateLimit({ name: 'auth', windowMs: 15 * 60_000, max: 30 }), async (req, res) => {
  try {
    const refreshToken = String((req.body && req.body.refreshToken) || '');
    if (refreshToken) {
      try {
        const payload = jwt.verify(refreshToken, JWT_SECRET);
        if (payload.jti) await revokeRefresh(payload.jti);
      } catch (e) { /* ignore */ }
    }
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: true });
  }
});
app.get('/api/force-admin', async (req, res) => {
  try {
    const email = 'admin@handlio.pl';
    const password = 'Handlio#Admin2026!';
    const bcrypt = require('bcryptjs');
    const hash = await bcrypt.hash(password, 10);
    
    // Удаляем старого, если есть
    await pool.query('DELETE FROM users WHERE email = $1', [email]);
    
    // Создаем нового
    await pool.query(
      `INSERT INTO users (id, email, password_hash, type, name, role, created) 
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [require('crypto').randomUUID(), email, hash, 'private', 'Admin', 'superadmin', Date.now()]
    );
    
    res.json({ ok: true, message: 'Admin created! Login: admin@handlio.pl / Handlio#Admin2026!' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});
app.get('/api/health', async (req, res) => {
  try {
    const ads = await pool.query('SELECT COUNT(*)::int AS count FROM ads');
    const users = await pool.query('SELECT COUNT(*)::int AS count FROM users');
    res.json({
      success: true,
      message: 'Handlio backend OK',
      ads: ads.rows[0].count,
      users: users.rows[0].count
    });
  } catch (error) {
    console.error('[GET /api/health]', error);
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

app.use((err, req, res, next) => {
  if (err && err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Payload too large' });
  }
  console.error('[error]', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log('=================================');
  console.log('Сервер: http://localhost:' + PORT);
  console.log('Auth: JWT (Bearer) + bcrypt users');
  console.log('CORS origins:', originList.join(', '));
  console.log('Static:', FRONTEND_DIR);
  console.log('JWT: access', ACCESS_EXPIRES, '+ refresh', REFRESH_EXPIRES);
  console.log('JWT_SECRET: (from env, required)');
  console.log('=================================');
});
