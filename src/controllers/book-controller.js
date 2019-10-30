const bookStore = require(`../stores/books-store`);
const authorStore = require(`../stores/authors-store`);
const NotFoundError = require(`../errors/not-found-error`);
const BadRequestError = require(`../errors/bad-request-error`);
// langId - это всегда язык интерфейса

const getBookLangs = (req, res) => {
  const bookId = req.params.bookId;
  const langs = bookStore.getBookLangs(bookId);

  if (langs) {
    res.send(langs);
  } else {
    // не найдена книга
    throw new NotFoundError(`Book '${bookId}' not found`);
  }
};

const _getBookSideMenu = (lang, menu) => {
  return menu.map((item) => {
    const newItem = {
      articleId: item.articleId,
      title: item.title[lang]
    };

    if (item.children) {
      newItem.children = item.children.map((child) => {
        return {
          articleId: child.articleId,
          title: child.title[lang]
        };
      });
    }

    return newItem;
  });
};

const _getBookMainMenu = (lang, menu) => {
  return menu.map((item) => {
    return {
      id: item.pageId,
      title: item.title[lang]
    };
  });
};

const getBookData = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;

  const book = bookStore.getBook(bookId);

  if (book) {
    if (book.langs.includes(langId)) {
      const author = authorStore.getAuthorName(book.authorId, langId);
      const sideMenu = _getBookSideMenu(langId, book.sideMenu);
      const title = book.title[langId];
      const mainMenu = _getBookMainMenu(langId, book.mainMenu);
      const langs = book.langs;
      const sources = book.sources;
      const libraryUrl = book.libraryUrl;

      const data = {
        title,
        author,
        libraryUrl,
        sources,
        langs,
        sideMenu,
        mainMenu,
        langId // надо ли?
      };

      res.send(data);
    } else {
      throw new BadRequestError(`Book is not available on '${langId}' language`);
    }
  } else {
    throw new NotFoundError(`Book '${bookId}' not found`);
  }
};

module.exports = {
  getBookData,
  getBookLangs
};
