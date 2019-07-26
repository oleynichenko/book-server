const books = require(`../db/data/books/ptiha.json`);

const _getBook = (id) => {
  return books.find((b) => b.bookId === id);
};

const getTitle = (lang, id) => {
  return _getBook(id).title[lang];
};

const getBookSideMenu = (lang, id) => {
  const book = _getBook(id);

  return book.sideMenu.map((item) => {
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

const getBookLangs = (id) => {
  const book = _getBook(id);
  return book.sources.map((s) => {
    return s.langId;
  });
};

const getBookAuthors = (id) => {
  const sources = _getBook(id).sources;

  return sources.reduce((res, s) => {
    s.authors.forEach((a) => {
      if (!res.includes(a)) {
        res.push(a);
      }
    });
  }, []);
};

const getInterfaceLangs = (id) => {
  return _getBook(id).interfaceLangs;
};

const getBookSources = (id) => {
  return _getBook(id).sources;
};

module.exports = {
  getTitle,
  getBookSideMenu,
  getBookAuthors,
  getBookLangs,
  getBookSources,
  getInterfaceLangs
};

