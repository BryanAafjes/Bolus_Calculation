/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as ItemService from "./users.service";
 import { UserItem, Item } from "./user.interface";
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
    const something = await ItemService.selectUsers(item);

    res.status(201).json(something);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST user
userRouter.post("/adduser", async (req: Request, res: Response) => {
    try {
      const item: UserItem = req.body;
      const newItem = ItemService.create(item);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
});
