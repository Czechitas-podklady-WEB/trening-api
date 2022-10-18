import express from 'express';
import tasks from './tasks.js';

export const tasksRouter = express.Router();

tasksRouter.get('/tasks', (req, res) => {
  const { done } = req.query;

  if (done !== undefined) {
    res.status(200).json(tasks.filter((task) => String(task.done) === done));
    return;
  }
  
  res.status(200).json(tasks);
});
