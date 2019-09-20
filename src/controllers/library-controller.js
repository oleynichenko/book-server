const libraryStore = require(`../stores/library-store`);
const bookStore = require(`../stores/books-store`);
const NotFoundError = require(`../errors/not-found-error`);

const _getMenuByLang = (menu, lang) => {
  return menu.map((i) => {
    return {
      id: i.id,
      title: i.title[lang]
    };
  });
};

const getLibraryData = (req, res) => {
  const libraryId = req.params.libraryId;
  const langId = req.params.langId;

  const library = libraryStore.getLibraryById(libraryId, langId);

  if (library) {
    if (library.langs.includes(langId)) {
      const books = library.books.map((id) => {
        const book = bookStore.getBook(id);

        return {
          id,
          langs: book.langs,
          title: book.title[langId]
        };
      });

      const menu = _getMenuByLang(library.menu, langId);

      res.send({
        langId,
        ...library,
        menu,
        books
      });
    } else {
      // не найден язык
      throw new BadRequestError(`Library does not have '${langId}' translations`);
    }
  } else {
    // не найдена библиотека
    throw new NotFoundError(`Library '${libraryId}' not found`);
  }
};

const getLibraryLangs = (req, res) => {
  const libraryId = req.params.libraryId;

  const langs = libraryStore.getLibraryLangs(libraryId);

  if (langs) {
    res.send(langs);
  } else {
    // не найдена библиотека
    throw new NotFoundError(`Library '${libraryId}' not found`);
  }
};

module.exports = {
  getLibraryData,
  getLibraryLangs
};
