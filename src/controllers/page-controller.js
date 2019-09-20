const pagesStore = require(`../stores/pages-store`);
const NotFoundError = require(`../errors/not-found-error`);

const getPage = (req, res) => {
  const pageId = req.params.pageId;
  const langId = req.params.langId;
  const sourceId = req.params.sourceId;

  const page = pagesStore.getPage(langId, pageId, sourceId);

  if (page) {
    res.send(page);
  } else {
    throw new NotFoundError(`Page '${pageId}' in '${sourceId}' source on '${langId}' not found`);
  }
};

module.exports = {
  getPage
};
