/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as ItemService from "./calculations.service";
 import { BaseItem, Item } from "./calculation.interface";
/**
 * Router Definition
 */

 export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET calculations
//  itemsRouter.get("/getcalculation", async (req: Request, res: Response) => {
//   try {
//     const item: BaseItem = req.body;

//     const newItem = ItemService.create(item);

//     res.status(201).json(newItem);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

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
