import { CATEGORY_TABLE } from "../consts/tables";
import { Pool } from "../bin/pg";
import { QueryResultRow } from "pg";

interface Response {
  data: QueryResultRow[];
  msg?: string;
}

export const all = async (): Promise<Response> => {
  try {
    const res = await Pool.query(`SELECT * from ${CATEGORY_TABLE}`);
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};
