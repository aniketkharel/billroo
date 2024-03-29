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

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8083",
      "http://54.66.184.178:3000",
    ],
  })
);
/* GET Routes
 *
 * */
app.use("/api/expenses", expenseRouter);
app.use("/api/categories", categoryRouter);

export default app;
