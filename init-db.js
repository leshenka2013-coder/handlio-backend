/**
 * Создаёт таблицы ads (если нет) и users.
 * Запуск: node init-db.js
 */
const pool = require('./db');
const bcrypt = require('bcryptjs');

async function main() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      type TEXT DEFAULT 'private',
      name TEXT,
      phone TEXT,
      company TEXT,
      nip TEXT,
      contact TEXT,
      role TEXT DEFAULT 'user',
      created BIGINT
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS ads (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      title TEXT,
      category TEXT,
      price NUMERIC,
      city TEXT,
      description TEXT,
      image TEXT,
      images JSONB,
      phone TEXT,
      brand TEXT,
      model TEXT,
      color TEXT,
      year INT,
      mileage INT,
      fuel TEXT,
      gearbox TEXT,
      condition TEXT,
      engine TEXT,
      area NUMERIC,
      rooms INT,
      floor TEXT,
      deal TEXT,
      prop_type TEXT,
      location_type TEXT,
      country TEXT,
      district TEXT,
      region TEXT,
      views INT DEFAULT 0,
      status TEXT DEFAULT 'pending',
      paid BOOLEAN DEFAULT false,
      paid_until TIMESTAMPTZ,
      paid_amount NUMERIC,
      pay_method TEXT,
      boosted_until BIGINT,
      boosted_at BIGINT,
      moderated_at BIGINT,
      moderated_by TEXT,
      created BIGINT
    );
  `);

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@handlio.pl';
  const adminPass = process.env.ADMIN_PASSWORD || 'Handlio#Admin2026!';
  const existing = await pool.query('SELECT id FROM users WHERE email = $1', [adminEmail]);
  if (existing.rows.length === 0) {
    const hash = await bcrypt.hash(adminPass, 10);
    await pool.query(
      `INSERT INTO users (id, email, password_hash, type, name, company, phone, role, created)
       VALUES ($1,$2,$3,'business','Super Admin','Handlio','+48 100 000 000','superadmin',$4)`,
      ['admin-handlio-001', adminEmail, hash, Date.now()]
    );
    console.log('Admin created:', adminEmail);
  } else {
    console.log('Admin already exists:', adminEmail);
  }

  await pool.query(`ALTER TABLE ads ADD COLUMN IF NOT EXISTS extra JSONB DEFAULT '{}'::jsonb`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS refresh_tokens (
      jti TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      expires_at BIGINT NOT NULL,
      created_at BIGINT
    );
  `);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_refresh_user ON refresh_tokens(user_id)`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS audit_logs (
      id TEXT PRIMARY KEY,
      actor_id TEXT,
      action TEXT NOT NULL,
      target_type TEXT,
      target_id TEXT,
      meta JSONB,
      created BIGINT
    );
  `);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created DESC)`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_ads_status ON ads(status)`);
await pool.query(`
  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    conv TEXT NOT NULL,
    ad_id TEXT,
    from_id TEXT NOT NULL,
    to_id TEXT NOT NULL,
    text TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    created BIGINT NOT NULL
  );
`);
await pool.query(`CREATE INDEX IF NOT EXISTS idx_messages_conv ON messages(conv, created)`);
await pool.query(`CREATE INDEX IF NOT EXISTS idx_messages_to_unread ON messages(to_id, read)`);

await pool.query(`
  CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    text TEXT,
    type TEXT DEFAULT 'system',
    meta JSONB,
    read BOOLEAN DEFAULT false,
    created BIGINT NOT NULL
  );
`);
await pool.query(`CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id, created DESC)`);

await pool.query(`
  CREATE TABLE IF NOT EXISTS reports (
    id TEXT PRIMARY KEY,
    ad_id TEXT NOT NULL,
    reporter_id TEXT NOT NULL,
    seller_id TEXT,
    reason TEXT NOT NULL,
    comment TEXT,
    status TEXT DEFAULT 'open',
    created BIGINT NOT NULL,
    closed_at BIGINT,
    closed_by TEXT
  );
`);
await pool.query(`CREATE INDEX IF NOT EXISTS idx_reports_status ON reports(status, created DESC)`);
  console.log('DB init OK');
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
