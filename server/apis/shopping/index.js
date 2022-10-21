import express from 'express';
import items from './items.js';

export const shoppingRouter = express.Router();

shoppingRouter.get("/", (req, res) => {
  res.status(200).json(items.mon);
});

shoppingRouter.get("/:day", (req, res) => {
  const { day } = req.params;
  const result = items[day];
  
  if (result === undefined) {
    res.sendStatus(404);
    return;
  }

  res.status(200).json(result);
});
