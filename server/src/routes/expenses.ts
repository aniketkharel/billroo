import { Router } from "express";
import { Request, Response } from "express";
import { all, avgExpensePerCatergory } from "../controllers/expenses";

export const expenseRouter: Router = Router();

expenseRouter.get("/", async (_req: Request, res: Response) => {
  const result = await all();
  res.send(result);
});

expenseRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
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
