import { Client } from "pg";
import { PG_URI, PG_USER, PG_PASSWORD, PG_DATABASE } from "../util/secrets";

export const getClient = async (): Promise<Client> => {
  const client = new Client({
    host: PG_URI,
    user: `${PG_USER as string}`,
    database: PG_DATABASE,
    password: `${PG_PASSWORD as string}`,
    port: 5432,
    ssl: false,
  });
  await client.connect();
  return client;
};
