const mongoose = require('mongoose');
const { langSchema } = require('./schemas');

const ObjectId = mongoose.Schema.Types.ObjectId;

const linkSchema = new Schema({
  linkId: ObjectId,
  name: langSchema,
  url: String,
  description: String
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
