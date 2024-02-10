import { EXPENSES_TABLE } from "../consts/tables";
import { Pool } from "../bin/pg";
import { QueryResultRow } from "pg";
import {
  QUERY_AVG,
  QUERY_EXPENSES_WITH_CATEGORY_CURRENT_DAY,
  QUERY_EXPENSE_CURRENT_DAY,
} from "../consts/query";

interface Response {
  data: QueryResultRow[];
  msg?: string;
}

export const all = async (): Promise<Response> => {
  try {
    const res = await Pool.query(
      `SELECT * from ${EXPENSES_TABLE} exp where exp.user_id=3`
    );
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};

export const getExpenseForTheDay = async (id: number): Promise<Response> => {
  try {
    const res = await Pool.query(QUERY_EXPENSE_CURRENT_DAY(id));
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};

export const getExpenseForTheDayWithItsCateogry = async (
  id: number
): Promise<Response> => {
  try {
    const res = await Pool.query(QUERY_EXPENSES_WITH_CATEGORY_CURRENT_DAY(id));
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};

export const addExpenseForTheDay = async (): Promise<Response> => {
  try {
    const res = await Pool.query(
      `SELECT * from ${EXPENSES_TABLE} exp where exp.user_id=3`
    );
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};

export const avgExpensePerCatergory = async (id: number): Promise<Response> => {
  try {
    const res = await Pool.query(QUERY_AVG(id));
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};
