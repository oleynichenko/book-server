const express = require(`express`);
const controller = require(`../controllers/page-controller`);
const pageRouter = new express.Router();

pageRouter.get(`/:sourceId/:pageId/:langId`, controller.getPage);

module.exports = pageRouter;
