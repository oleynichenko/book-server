const _pages = require(`../db/data/pages/pages`);

const getPage = (langId, pageId, bookId) => {
  if (bookId) {
    return _pages.filter((c) => {
      return c.pageId === pageId
        && c.bookId === bookId
        && c.langId === langId;
    });
  } else {
    return _pages.filter((c) => {
      return c.pageId === pageId
        && c.langId === langId;
    });
  }
};

module.exports = {
  getPage
};

