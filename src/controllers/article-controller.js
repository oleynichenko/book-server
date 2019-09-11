const articleStore = require(`../stores/articles-store`);

const getArticle = (req, res) => {
  const articleId = req.params.articleId;
  const langId = req.params.langId;
  const authorId = req.params.authorId;
  const bookId= req.params.bookId;

  const data = articleStore.getArticle(langId, bookId, articleId, authorId);

  res.send(data);
};

module.exports = {
  getArticle
};
