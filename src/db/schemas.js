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

const chunkSchema = new Schema({
  chunkId: ObjectId,
  content: String
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

// для комментариев на статьи
const commentSchema = new Schema({
  commentId: String,
  authorId: String,
  articleId: String,
  title: String,
  chunks: [chunkSchema]
});

// для статей книги
const articleSchema = new Schema({
  articleId: String,
  authorId: String,
  title: String,
  bookId: String,
  chunks: [chunkSchema],
  comments: [String],
  tags: [String]
});

module.exports = {
  langSchema,
  menuItemSchema,
  commentSchema,
  articleSchema
};
