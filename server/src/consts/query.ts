export const QUERY_AVG = (user_id: number): string => {
  return `WITH user_avg AS (
  SELECT
    user_id,
    category_id,
    AVG(amount) AS avg_expense_per_category
  FROM
    expenses
  WHERE
    user_id = ${user_id}
    AND date >= CURRENT_DATE - INTERVAL '7 days'
  GROUP BY
    user_id, category_id
),
type_avg AS (
  SELECT
    category_id,
    AVG(amount) AS avg_expense_per_category
  FROM
    expenses
  WHERE
    date >= CURRENT_DATE - INTERVAL '7 days'
  GROUP BY
    category_id
)
SELECT
  ua.user_id,
  c.name AS category_name,
  ua.avg_expense_per_category AS avg_expense_per_user_category,
  COALESCE(ta.avg_expense_per_category, 0) AS avg_expense_per_all_category
FROM
  user_avg ua
LEFT JOIN
  type_avg ta ON ua.category_id = ta.category_id
LEFT JOIN
  Category c ON ua.category_id = c.id
ORDER BY
  ua.user_id, ua.category_id;`;
};

export const QUERY_EXPENSES_CURRENT_DAY = (user_id: number): string => {
  return `select * from expenses exp where exp.user_id=${user_id} and exp.date=CURRENT_DATE;`;
};

export const QUERY_EXPENSE_CURRENT_DAY_PER_CATEGORY = (
  user_id: number,
  cat_id: number
): string => {
  return `select * from expenses exp where exp.user_id=${user_id} and exp.date=CURRENT_DATE and exp.category_id=${cat_id};`;
};

export const QUERY_EXPENSES_WITH_CATEGORY_CURRENT_DAY = (
  id: number
): string => {
  return `SELECT
  e.id AS expense_id,
  e.amount,
  e.category_id,
  e.date,
  c.name AS category_name
FROM
  expenses e
JOIN
  category c ON e.category_id = c.id
WHERE
  e.user_id= ${id} and
  e.date = CURRENT_DATE;`;
};

export const INSERT_QUERY_EXPENSE_CURRENT_DAY_PER_CATEGORY = (
  user_id: number,
  cat_id: number
): string => {
  return `insert into expenses (amount, user_id, category_id, date) values(20, ${user_id}, ${cat_id}, CURRENT_DATE);`;
};

export const UPDATE_EXPENSE_AMOUNT = (
  exp_id: number,
  user_id: number,
  amount: number
): string => {
  return `
 UPDATE expenses
SET amount = ${amount}
WHERE user_id = ${user_id} AND id=${exp_id};`;
};
