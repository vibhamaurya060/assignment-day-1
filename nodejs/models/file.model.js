const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  mimetype: String,
  uploadedAt: { type: Date, default: Date.now }
});

const fileModel = mongoose.model('file', fileSchema);

module.exports=fileModel;