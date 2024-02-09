import { Router } from "express";
import { Request, Response } from "express";
import { all } from "../controllers/expenses";

export const expenseRouter: Router = Router();

expenseRouter.get("/", async (_req: Request, res: Response) => {
  const result = await all();
  res.send(result);
});

expenseRouter.get("/:cat", async (req: Request, res: Response) => {
  const category :String= req.params.cat
  const result = await all();
  res.send(result);
});
