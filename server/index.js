import express from 'express';
import { moviesRouter } from './apis/movies/index.js';

const port = process.env.PORT || 4000;

const app = express();

// app.use('/', (req, res) => {
//   res.redirect(301, '/docs');
// });

app.use('/docs', express.static('docs/_site', {
  extensions: ['html'],
}));

app.use('/apis/movies', moviesRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
