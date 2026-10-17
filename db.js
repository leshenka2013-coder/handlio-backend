require('dotenv').config();
const { Pool } = require('pg');

// Поддержка DATABASE_URL или отдельных PG* переменных
const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : new Pool({
      host: process.env.PGHOST || 'localhost',
      port: Number(process.env.PGPORT || 5432),
      user: process.env.PGUSER || 'postgres',
      password: process.env.PGPASSWORD || '123456',
      database: process.env.PGDATABASE || 'handlio',
    });

pool.on('error', (err) => {
  console.error('[pg] unexpected error', err.message);
});

module.exports = pool;
