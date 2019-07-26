const express = require(`express`);
const controller = require(`../controllers/interface-controller`);

const interfaceRouter = new express.Router();

interfaceRouter.get(`/:langId/:bookId`, controller.getBookInterface);
interfaceRouter.get(`/:langId/lang-menu/:langsIds`, controller.getLangMenu);
interfaceRouter.get(`/:langId/:bookId/:articleId`, controller.getArticleInterface);

module.exports = interfaceRouter;
