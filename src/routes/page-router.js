const express = require(`express`);
const controller = require(`../controllers/page-controller`);

const pageRouter = new express.Router();

// sourceId может быть id книги а может быть id библиотеки
pageRouter.get(`/:pageId/:langId/:sourceId`, controller.getPage);

module.exports = pageRouter;
