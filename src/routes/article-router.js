const express = require(`express`);
const {async} = require(`../util`);

const ArticlesController = require(`../controllers/article-controller`);
const getArticlesStore = require(`../stores/articles-store`);

module.exports = async () => {
  const articleRouter = new express.Router();

  const articlesStore = await getArticlesStore();
  const controller = new ArticlesController(articlesStore);

  // статьи доступные книге согласно book.sources
  articleRouter.get(
      `/menu/:articleId/:langId/:bookId`,
      async(controller.getArticleMenu)
  );

  articleRouter.get(
      `/:articleId/:authorId/:langId/:bookId`,
      async(controller.getArticle)
  );

  return articleRouter;
};
