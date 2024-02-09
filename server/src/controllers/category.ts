import { Request, Response } from "express";

export const all = (req: Request, res: Response) => {
  res.render("contact", {
    title: "Contact",
  });
};
