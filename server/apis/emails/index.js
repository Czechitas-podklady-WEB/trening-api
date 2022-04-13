import express from 'express';
import emails from './emails.js';

const emailReferences = emails.map((email) => ({
  ...email,
  body: undefined,
}));

export const emailsRouter = express.Router();

emailsRouter.get("/", (req, res) => {
  const folder = req.query.folder ?? 'all';

  if (folder === 'all') {
    res.status(200).json({ emails: emailReferences });
    return;
  }

  if (folder === 'unread') {
    const filtered = emailReferences.filter((email) => email.unread === true);
    res.status(200).json({ emails: filtered });
    return;
  }

  if (folder === 'read') {
    const filtered = emailReferences.filter((email) => email.unread === false);
    res.status(200).json({ emails: filtered });
    return;
  }

  res.status(400).json({ error: "Invalid 'folder' parametr." });
});

emailsRouter.get('/:id', (req, res) => {
  const id = req.params.id ? Number(req.params.id) : null;
  const email = emails.find((email) => email.id === id);
  if (email) {
    res.status(200).json(email);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});