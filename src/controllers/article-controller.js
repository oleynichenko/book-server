const articleStore = require(`../stores/articles-store`);

const getArticle = (req, res) => {
  const articleId = req.params.articleId;
  const langId = req.params.langId;

  const data = {
  };

  res.send(data);
};

module.exports = {
  getArticle
};
