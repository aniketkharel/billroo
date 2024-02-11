import { Router } from "express";
import { Request, Response } from "express";
import {
  addExpenseForTheDayPerCategory,
  all,
  avgExpensePerCatergory,
  getExpenseForTheDayWithItsCateogry,
  updateAmount,
} from "../controllers/expenses";

export const expenseRouter: Router = Router();

expenseRouter.get("/", async (_req: Request, res: Response) => {
  const result = await all();
  res.send(result);
});

expenseRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  if (!id || id === " ") {
    return res.send({ data: [], msg: "No Data" });
  }
  const result = await avgExpensePerCatergory(parseInt(id));
  res.send(result);
});

expenseRouter.get("/today/all/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  if (!id || id === " ") {
    return res.send({ data: [], msg: "No Data" });
  }
  const result = await getExpenseForTheDayWithItsCateogry(parseInt(id));
  res.send(result);
});

expenseRouter.post("/today", async (req: Request, res: Response) => {
  const id: string = req.body.user_id;
  const cat_id: string = req.body.cat_id;
  const amount: string = req.body.amount;
  if (!id || id === " " || !cat_id || cat_id === " ") {
    return res.send({ data: [], msg: "No Data" });
  }
  const result = await addExpenseForTheDayPerCategory(
    parseInt(id),
    parseInt(cat_id),
    parseInt(amount)
  );
  res.send(result);
});

expenseRouter.put("/today", async (req: Request, res: Response) => {
  const id: string = req.body.user_id;
  const exp_id: string = req.body.exp_id;
  const amount: string = req.body.amount;
  if (
    !id ||
    id === " " ||
    !amount ||
    amount === " " ||
    !exp_id ||
    exp_id === " "
  ) {
    return res.send({ data: [], msg: "No Data" });
  }
  const result = await updateAmount(
    parseInt(exp_id),
    parseInt(id),
    parseInt(amount)
  );
  res.send(result);
});
