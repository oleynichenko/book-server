const mongoose = require(`mongoose`);
const {langSchema} = require(`src/db/models/schemas`);

const ObjectId = mongoose.Schema.Types.ObjectId;

const dictionarySchema = new mongoose.Schema({
  termId: ObjectId,
  term: langSchema,
  explanation: langSchema,
  tags: [String]
});

const Dictionary = mongoose.model(`Author`, dictionarySchema);

module.exports = Dictionary;
