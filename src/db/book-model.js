const mongoose = require('mongoose');
const { langSchema } = require('./schemas');

const ObjectId = mongoose.Schema.Types.ObjectId;

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
  commentId: String,
  title: langSchema,
  author: ObjectId,
  content: langSchema
});

const articleSchema = new Schema({
  articleId: String,
  title: langSchema,
  paragraphs: [paragraphSchema],
  comments: [commentSchema],
  tags: [String]
});

const bookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true
  },
  languages: [String],
  title: langSchema,
  publishYear: Number,
  articles: [articleSchema],
  comments: [commentSchema],
  links: [String],
  mainMenu: {
    order: [ObjectId],
    items: [menuItemSchema]
  },
  sideMenu: {
    order: [ObjectId],
    items: [menuItemSchema]
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
