import { Request, Response } from "express";

export const getContact = (req: Request, res: Response) => {
  res.render("contact", {
    title: "Contact",
  });
};
