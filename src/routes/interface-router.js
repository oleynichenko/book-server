const express = require(`express`);
const controller = require(`../controllers/interface-controller`);

const interfaceRouter = new express.Router();

interfaceRouter.get(`/:langId/:bookId`, controller.getBookInterface);
interfaceRouter.get(`/:langId/lang-menu/:langsIds`, controller.getLangMenu);
interfaceRouter.get(`/:langId/article-menu/:bookId/:articleId`, controller.getArticleMenu);
interfaceRouter.get(`/:langId/comment-data/:articleId`, controller.getCommentData);

module.exports = interfaceRouter;
