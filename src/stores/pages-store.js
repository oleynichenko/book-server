const _pages = require(`../db/data/pages/pages`);

const getPage = (langId, pageId, sourceId) => {
  return _pages.find((c) => {
    return c.pageId === pageId
      && c.sourceId === sourceId
      && c.langId === langId;
  });
};

module.exports = {
  getPage
};

