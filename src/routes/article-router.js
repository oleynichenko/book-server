const express = require(`express`);
const controller = require(`../controllers/article-controller`);

const articleRouter = new express.Router();

// статьи доступные книге согласно book.sources
articleRouter.get(`/menu/:articleId/:langId/:bookId`, controller.getArticleMenu);

articleRouter.get(`/:articleId/:authorId/:langId/:bookId`, controller.getArticle);

module.exports = articleRouter;
