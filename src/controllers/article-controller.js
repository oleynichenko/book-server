const articlesStore = require(`../stores/articles-store`);
const langsStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);
const NotFoundError = require(`../errors/not-found-error`);
const BadRequestError = require(`../errors/bad-request-error`);

const getArticle = (req, res) => {
  const articleId = req.params.articleId;
  const langId = req.params.langId;
  const authorId = req.params.authorId;
  const bookId = req.params.bookId;

  const data = articlesStore.getArticle(langId, bookId, articleId, authorId);

  res.send(data);
};

const getArticleMenu = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;
  const articleId = req.params.articleId;

  const allArticles = articlesStore.getDataArticlesById(articleId, bookId);

  if (allArticles && allArticles.length) {
    const articleMenu = allArticles.map((a) => {
      const langName = langsStore.getLangName(a.langId, langId);
      const authorName = authorsStore.getAuthorName(a.authorId, langId);

      return {
        ...a,
        langName,
        authorName
      };
    });

    res.send(articleMenu);
  } else {
    throw new NotFoundError(`Articles '${articleId}' not found for book '${bookId} in '${langId} language'`);
  }
};

module.exports = {
  getArticle,
  getArticleMenu
};
