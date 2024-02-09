import express from "express";
import compression from "compression"; // compresses requests
import lusca from "lusca";
import { PG_URI } from "./util/secrets";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as apiController from "./controllers/api";
import * as contactController from "./controllers/contact";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.get("/api", apiController.getApi);

export default app;
