const mongoose = require(`mongoose`);
const {langSchema} = require(`./schemas`);

const ObjectId = mongoose.Schema.Types.ObjectId;

const authorSchema = new mongoose.Schema({
  authorId: String,
  name: langSchema,
  links: [ObjectId]
});

const Author = mongoose.model(`Author`, authorSchema);

module.exports = Author;
