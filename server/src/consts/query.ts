export const QUERY_AVG = (user_id: number): string => {
  return `WITH user_avg AS (
  SELECT
    user_id,
    category_id,
    AVG(amount) AS avg_expense_per_category
  FROM
    expenses
  WHERE
    user_id = 5
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

export const QUERY = `select exp.date,exp.amount,exp.user_id,cat.name,cat.id as cat_id from expenses exp join category cat
 on cat.id=exp.category_id where exp.user_id=3;`;
