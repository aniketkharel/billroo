import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  logger.debug(
    "Using .env.example file to supply config environment variables"
  );
  dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const PG_URI = prod
  ? process.env["PG_URI"]
  : process.env["PG_URI_LOCAL"];

export const PG_USER = prod
  ? process.env["PG_USER"]
  : process.env["PG_USER_LOCAL"];

export const PG_PASSWORD = prod
  ? process.env["PG_PASSWORD"]
  : process.env["PG_PASSWORD_LOCAL"];

export const PG_DATABASE = prod
  ? process.env["PG_DATABASE"]
  : process.env["PG_DATABASE_LOCAL"];

if (!PG_URI) {
  if (prod) {
    logger.error("No  connection string. Set PG_URI environment variable.");
  } else {
    logger.error(
      "No  connection string. Set PG_URI_LOCAL environment variable."
    );
  }
  process.exit(1);
}
