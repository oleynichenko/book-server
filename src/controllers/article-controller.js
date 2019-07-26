const articleStore = require(`../stores/articles-store`);
const languageStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);

const getArticle = (req, res) => {
  const articleId = req.params.articleId;
  const langId = req.params.langId;
  const authorId = req.params.authorId;

  const data = articleStore.getArticle(langId, articleId, authorId);

  res.send(data);
};

const getArticleMenu = (req, res) => {
  const articleId = req.params.articleId;
  const interfaceLangId = req.params.langId;

  const articlesData = articleStore.getArticlesById(articleId);

  const data = articlesData.map((a) => {
    const langName = languageStore.getLangName(a.langId, interfaceLangId);
    const authorName = authorsStore.getAuthorName(a.authorId, interfaceLangId);
    const title = `${authorName} - ${langName}`;

    return {...a, title};
  });

  res.send(data);
};

module.exports = {
  getArticle,
  getArticleMenu
};
