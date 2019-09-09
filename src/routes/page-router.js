const express = require(`express`);
const controller = require(`../controllers/page-controller`);
const pageRouter = new express.Router();

pageRouter.get(`/:langId/:pageId`, controller.getPage);
pageRouter.get(`/:langId/:pageId/:bookId`, controller.getPage);

module.exports = pageRouter;
