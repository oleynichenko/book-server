const _pages = require(`../db/data/pages/pages`);

const getPage = (langId, pageId, sourceId) => {
  let page = _pages.find((c) => {
    return c.pageId === pageId
      && c.sourceId === sourceId
      && c.langId === langId;
  });

  // для страниц без sourceId
  if (typeof page === `undefined`) {
    page = _pages.find((c) => {
      return c.pageId === pageId
        && c.langId === langId;
    });
  }

  return page;
};

module.exports = {
  getPage
};

