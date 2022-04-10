import express from 'express';

const generate = (length) => {
  let result = '';

  for (let i = 0; i < length; i += 1) {
    const charCode = 32 + Math.round(Math.random() * 94);
    result += String.fromCharCode(charCode);
  }

  return result;
}

export const passwordsRouter = express.Router();

passwordsRouter.get("/", (req, res) => {
  let length = req.query.length ? Number(req.query.length) : 12;
  if (length > 32) {
    length = 32;
  }

  const password = generate(length);

  res.status(200).json({
    password,
    length,
  });
});
