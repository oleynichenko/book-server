const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const langSchema = new Schema({
  ru: {
    type: String,
    trim: true
  },
  en: {
    type: String,
    trim: true
  },
  he: {
    type: String,
    trim: true
  }
});

const paragraphSchema = new Schema({
  paragraphId: ObjectId,
  content: langSchema
});

const menuItemSchema = new Schema({
  menuItemId: ObjectId,
  name: langSchema,
  url: String,
  children: [{
    menuItemId: ObjectId,
    name: langSchema,
    url: String,
  }]
});

const commentSchema = new Schema({
  language: String,
  commentId: String,
  title: String,
  author: ObjectId,
  content: String
});

const articleSchema = new Schema({
  articleId: String,
  title: langSchema,
  paragraphs: [paragraphSchema],
  comments: [commentSchema],
  tags: [String]
});

module.exports = {
  langSchema,
  menuItemSchema,
  commentSchema,
  articleSchema
};
