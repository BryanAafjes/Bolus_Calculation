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

//GET calculations
userRouter.get("/getUser", async (req: Request, res: Response) => {
  try {
    const something = await ItemService.selectUsers();

    res.status(201).json(something);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST calculations
userRouter.post("/adduser", async (req: Request, res: Response) => {
    try {
      const item: UserItem = req.body;
      const newItem = ItemService.create(item);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
});
