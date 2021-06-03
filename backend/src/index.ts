/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet = require("helmet");
 import http, { Server } from "http";
 

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

 const server = new Server(app);
 const io = require("socket.io")(server, {
   cors: {
     origin: ["http://localhost:8181", "http://127.0.0.1:8181"],
   },
 });
/**
 * Server Activation
 */

 server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

  io.on("connection", socket => {
    console.log(socket.id);
    console.log("wassup");
    socket.on('send-message', (message) => {
      io.emit('recieve-message', message)
      //console.log(message);
    })
    socket.on('send-cookieuser', (cookieUser) => {
      io.emit('recieve-cookieuser', cookieUser)
      //console.log(message);
    })
    socket.on('send-cookieuserDisconnected', (cookieUser) => {
      io.emit('recieve-cookieuserDisconnected', cookieUser)
      //console.log(message);
    })
  })


