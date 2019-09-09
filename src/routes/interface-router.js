const express = require(`express`);
const controller = require(`../controllers/interface-controller`);

const interfaceRouter = new express.Router();

interfaceRouter.get(`/langs/:bookId/`, controller.getInterfaceLangs);
interfaceRouter.get(`/:langId/:bookId`, controller.getBookInterface);
interfaceRouter.get(`/:langId/lang-menu/:langsIds`, controller.getLangMenu);
interfaceRouter.get(`/:langId/article-menu/:bookId/:articleId`, controller.getArticleMenu);
interfaceRouter.get(`/:langId/comment-menu/:bookId/:articleId`, controller.getCommentMenu);

module.exports = interfaceRouter;
