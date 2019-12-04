const bookStore = require(`../stores/books-store`);
const authorStore = require(`../stores/authors-store`);
// langId - это всегда язык интерфейса

const getBookAuthors = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;

  const authorsIds = bookStore.getBook(bookId).authors;

  if (authorsIds && authorsIds.length > 0) {
    const authors = authorStore.getAuthorsByLang(authorsIds, langId);

    res.send(authors);
  } else {
    res.send([]);
  }
};

module.exports = {
  getBookAuthors
};
