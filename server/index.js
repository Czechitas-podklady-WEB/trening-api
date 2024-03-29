import express from 'express';
import cors from 'cors';
import { moviesRouter } from './apis/movies/index.js';
import { passwordsRouter } from './apis/passwords.js';
import { shoppingRouter } from './apis/shopping/index.js';
import { emailsRouter } from './apis/emails/index.js';
import { tasksRouter } from './apis/tasks/index.js';
import { workshopRouter } from './apis/workshop.js';
import { realitkaRouter } from './apis/realitka.js';

const port = process.env.PORT || 4000;
const baseUrl = process.env.BASE_URL || '';

const app = express();

app.use(cors());

app.get(`${baseUrl}/`, (req, res) => {
  res.redirect(`${baseUrl}/docs`);
});

app.use(`${baseUrl}/docs`, express.static('docs/_site', {
  extensions: ['html'],
}));

app.use(`${baseUrl}/assets`, express.static('assets'));

app.use(`${baseUrl}/apis/movie-api`, moviesRouter);
app.use(`${baseUrl}/apis/passwords`, passwordsRouter);
app.use(`${baseUrl}/apis/shopping`, shoppingRouter);
app.use(`${baseUrl}/apis/emails`, emailsRouter);
app.use(`${baseUrl}/apis/tasks-api`, tasksRouter);
app.use(`${baseUrl}/apis/workshop`, workshopRouter);
app.use(`${baseUrl}/apis/realitka`, realitkaRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
