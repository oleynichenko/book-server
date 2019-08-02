const articleStore = require(`../stores/articles-store`);

const getArticle = (req, res) => {
  const articleId = req.params.articleId;
  const langId = req.params.langId;
  const authorId = req.params.authorId;

  const data = articleStore.getArticle(langId, articleId, authorId);

  res.send(data);
};

module.exports = {
  getArticle
};
