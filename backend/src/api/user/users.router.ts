/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as ItemService from "./users.service";
 import { UserItem, Item } from "./user.interface";
import { User } from "../../entity/User";

/**
 * Router Definition
 */

 export const userRouter = express.Router();

/**
 * Controller Definitions
 */

//get user credentials
userRouter.post("/loginuser", async (req: Request, res: Response) => {
  try {
    const item: UserItem = req.body;
    const user = await ItemService.LoginUser(item);
    res.status(201).json(user);
  } catch (e) {
    res.status(412).send(e.message);
  }
});

// POST user
userRouter.post("/adduser", async (req: Request, res: Response) => {
    try {
      const item: UserItem = req.body;
      const newItem = await ItemService.create(item);
      console.log(newItem);
      if(!newItem) {
        res.status(409).send("User already exists");
      } else {
        res.status(201).json(item);
      }
    } catch (e) {
      res.status(412).send(e.message);
    }
});
// Get all GPs
userRouter.get("/getgps", async(req: Request, res: Response) =>{
  const users = await ItemService.getAllGps();
  res.status(201).json(users);
})

userRouter.post("/selectuser", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body;
    const user = await ItemService.selectUserWithId(item);
    res.status(201).json(user);
  } catch (e) {
    res.status(412).send(e.message);
  }
});