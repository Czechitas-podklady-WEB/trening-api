import express from 'express';
import { moviesRouter } from './apis/movies/index.js';

const port = process.env.PORT || 4000;
const baseUrl = process.env.BASE_URL || '';

const app = express();

app.use(`${baseUrl}/docs`, express.static('docs/_site', {
  extensions: ['html'],
}));

app.use(`${baseUrl}/apis/movies`, moviesRouter);

app.use(`${baseUrl}/`, (req, res) => {
  res.redirect(`${baseUrl}/docs`);
});

app.listen(port, () => console.log(`Listening on ${port}`));
