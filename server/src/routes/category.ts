import { Router } from "express";
import { Request, Response } from "express";
import { all } from "../controllers/category";

export const categoryRouter: Router = Router();

categoryRouter.get("/", (req: Request, res: Response) => {
  const expenses = all(req, res);
  res.send(expenses);
});
