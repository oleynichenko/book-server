const pagesStore = require(`../stores/pages-store`);

const getPage = (req, res) => {
  const pageId = req.params.pageId;
  const langId = req.params.langId;
  const bookId = req.params.bookId;

  const pageContent = pagesStore.getPage(langId, pageId, bookId);

  if (pageContent && pageContent[0]) {
    res.send(pageContent[0]);
  } else {
    res.send({content: `no page`});
  }
};

module.exports = {
  getPage
};
