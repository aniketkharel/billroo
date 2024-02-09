import { Response, Request } from "express";
import { Pool } from "../bin/pg";
import { QueryResult } from "pg";

export const getApi = (req: Request, res: Response) => {
  Pool.query("SELECT * from users", (err, result: QueryResult) => {
    if (err) {
      return res.send({ error: err });
    }
    res.send({ data: result });
  });
};
