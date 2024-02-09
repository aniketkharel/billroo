import { Pool as DbPool } from "pg";
import { PG_URI } from "../util/secrets";

export const Pool: DbPool = new DbPool({
  host: PG_URI,
  user: "dev",
  database: "billroo",
  password: "dev",
  port: 5432,
})
  .once("connect", () => {
    console.log(" === DB Connected ===");
  })
  .on("error", () => {
    console.log(" === Error connecting to the database === ");
  });
