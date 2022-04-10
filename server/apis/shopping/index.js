import express from 'express';
import items from './items.js';

export const shoppingRouter = express.Router();

shoppingRouter.get("/", (req, res) => {
  res.status(200).json(items);
});
