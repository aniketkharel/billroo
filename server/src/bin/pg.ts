import { Pool as DbPool } from "pg";
import { PG_URI, PG_USER, PG_PASSWORD, PG_DATABASE } from "../util/secrets";

export const Pool: DbPool = new DbPool({
  host: PG_URI,
  user: `${PG_USER as string}`,
  database: PG_DATABASE,
  password: `${PG_PASSWORD as string}`,
  port: 5432,
  ssl: false,
})
  .once("connect", () => {
    console.log(" === DB Connected ===");
  })
  .on("error", () => {
    console.log(" === Error connecting to the database === ");
  });
