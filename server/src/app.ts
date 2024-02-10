import express from "express";
import compression from "compression"; // compresses requests
import lusca from "lusca";
import { expenseRouter } from "./routes/expenses";
import { categoryRouter } from "./routes/category";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: ".env" });

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
  origin: function (
    origin: string,
    callback: (arg0: Error, arg1: boolean) => void
  ) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
};

app.use(cors(corsOptions));
/* GET Routes
 *
 * */
app.use("/api/expenses", expenseRouter);
app.use("/api/category", categoryRouter);

export default app;
