const libraryStore = require(`../stores/library-store`);
const bookStore = require(`../stores/books-store`);

const getLibrary = (req, res) => {
  const libraryId = req.params.libraryId;
  const langId = req.params.langId;

  const booksIds = libraryStore.getBooksIds(libraryId);

  const books = booksIds.map((id) => {
    return {
      id,
      langs: bookStore.getInterfaceLangs(id),
      title: bookStore.getTitle(langId, id)
    };
  });

  res.send(books);
};

module.exports = {
  getLibrary
};
