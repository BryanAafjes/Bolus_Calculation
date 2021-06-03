/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as ItemService from "./calculations.service";
 import { BaseItem, Item } from "./calculation.interface";
 import {Item as UserItemWithId} from "../user/user.interface";

/**
 * Router Definition
 */

 export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

//GET calculations
itemsRouter.post("/getcalculation", async (req: Request, res: Response) => {
    try {
        console.log("test in de router");
        const userItem:UserItemWithId = req.body;
        console.log(req.body);
        console.log(userItem.id);// = undefined
        const something = await ItemService.selectallFromUser(userItem.id);

    res.status(201).json(something);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST calculations
itemsRouter.post("/postcalculation", async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;
      const newItem = ItemService.create(item);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
});
