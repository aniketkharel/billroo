import { Pool } from "../bin/pg";
import { QueryResultRow } from "pg";

interface Response {
  data: QueryResultRow[];
  msg?: string;
}

export const all = async (): Promise<Response> => {
  try {
        const res = await Pool.query("SELECT * from users");
        return { data: res.rows };
    } catch (err) {
        return { data: [], msg: err.message };
    }
};
