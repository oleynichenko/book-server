const mongoose = require(`mongoose`);
const {
  langSchema,
  menuItemSchema,
  commentSchema,
  articleSchema} = require(`./schemas`);

const ObjectId = mongoose.Schema.Types.ObjectId;

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

const Book = mongoose.model(`Book`, bookSchema);

module.exports = Book;
