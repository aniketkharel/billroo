import { EXPENSES_TABLE } from "../consts/tables";
import { Pool } from "../bin/pg";
import { QueryResultRow } from "pg";
import {
  QUERY_AVG,
  QUERY_EXPENSES_WITH_CATEGORY_CURRENT_DAY,
  QUERY_EXPENSES_CURRENT_DAY,
  QUERY_EXPENSE_CURRENT_DAY_PER_CATEGORY,
  INSERT_QUERY_EXPENSE_CURRENT_DAY_PER_CATEGORY,
  UPDATE_EXPENSE_AMOUNT,
} from "../consts/query";

interface Response {
  data: QueryResultRow[];
  msg?: string;
  status?: number;
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

export const getExpensesForTheDay = async (id: number): Promise<Response> => {
  try {
    const res = await Pool.query(QUERY_EXPENSES_CURRENT_DAY(id));
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

export const avgExpensePerCatergory = async (id: number): Promise<Response> => {
  try {
    const res = await Pool.query(QUERY_AVG(id));
    return { data: res.rows };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};

export const addExpenseForTheDayPerCategory = async (
  id: number,
  cat_id: number
): Promise<Response> => {
  try {
    const expense = await Pool.query(
      QUERY_EXPENSE_CURRENT_DAY_PER_CATEGORY(id, cat_id)
    );
    if (expense.rows.length) {
      return {
        data: [],
        msg: "It looks like you already added todays expense for this category.",
        status: 403,
      };
    } else {
      await Pool.query(
        INSERT_QUERY_EXPENSE_CURRENT_DAY_PER_CATEGORY(id, cat_id)
      );
      return { data: [], msg: "Your expense has been inserted.", status: 200 };
    }
  } catch (err) {
    return { data: [], msg: err.message };
  }
};

export const updateAmount = async (
  exp_id: number,
  user_id: number,
  amount: number
): Promise<Response> => {
  try {
    const res = await Pool.query(
      UPDATE_EXPENSE_AMOUNT(exp_id, user_id, amount)
    );
    if (res.rowCount) {
      return { data: res.rows, msg: "Expense updated", status: 200 };
    }
    return { data: res.rows, msg: "Cannot update your expense", status: 403 };
  } catch (err) {
    return { data: [], msg: err.message };
  }
};
