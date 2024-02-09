import { Pool as DbPool } from "pg";

export const Pool: DbPool = new DbPool({
  user: "dev",
  host: "localhost",
  database: "dev",
  password: "dev",
  port: 5432,
});
