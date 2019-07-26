const express = require(`express`);
const controller = require(`../controllers/article-controller`);

const articleRouter = new express.Router();

articleRouter.get(`/menu/:langId/:articleId`, controller.getArticleMenu);
articleRouter.get(`/:langId/:articleId/:authorId`, controller.getArticle);

module.exports = articleRouter;
