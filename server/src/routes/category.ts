import { Router } from "express";
import { Request, Response } from "express";
import { all } from "../controllers/category";

export const categoryRouter: Router = Router();

categoryRouter.get("/", async (req: Request, res: Response) => {
  const results = await all();
  res.send(results);
});
