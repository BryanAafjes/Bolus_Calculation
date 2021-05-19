/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet = require("helmet");

 import { itemsRouter } from "./api/calculation/calculations.router";
 import { userRouter } from "./api/user/users.router";

 dotenv.config();

/**
 * App Variables
 */
 const PORT: number = 8000;
 const app = express();

/**
 *  App Configuration
 */

 app.use(cors());
 app.use(express.json());

 app.use("/api", itemsRouter);
 app.use("/api", userRouter);

/**
 * Server Activation
 */

 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
