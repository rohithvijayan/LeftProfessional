import { neon } from '@neondatabase/serverless';

let sql;

export function getSQL() {
  if (!sql) {
    if (!process.env.digitalbrigade_DATABASE_URL) {
      throw new Error('digitalbrigade_DATABASE_URL is not defined');
    }
    sql = neon(process.env.digitalbrigade_DATABASE_URL);
  }
  return sql;
}
