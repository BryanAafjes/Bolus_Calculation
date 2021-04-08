/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as ItemService from "./calculations.service";
 import { BaseItem, Item } from "./calculation.interface";
import { Bolus } from "../entity/Bolus";
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
itemsRouter.get("/getcalculation", async (req: Request, res: Response) => {
  try {
    
    
    const something = await ItemService.selectall();
    
    //something = "floober";
    //console.log(ItemService.selectall());
    //console.log(something, "dit is de response");
    res.status(201).json(something);
  } catch (e) {
    res.status(500).send(e.message);
  }
 
});
// POST calculations
itemsRouter.post("/postcalculation", async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;
      //console.log("dit is een test in de router");
      //console.log(item);
      const newItem = ItemService.create(item);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
});
