const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const fileModel = require('../models/file.model');
const fileRouter = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

fileRouter.post('/upload', upload.single('file'), async (req, res) => {
  const file = await fileModel.create({
    filename: req.file.filename,
    path: req.file.path,
    mimetype: req.file.mimetype
  });
  res.status(201).json(file);
});

fileRouter.get('/download/:id', async (req, res) => {
  const file = await fileModel.findById(req.params.id);
  if (!file || !fs.existsSync(file.path)) return res.sendStatus(404);
  res.download(file.path, file.filename);
});

module.exports = fileRouter;
