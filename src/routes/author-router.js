const express = require(`express`);
const controller = require(`../controllers/author-controller`);

const authorRouter = new express.Router();

authorRouter.get(`/:langId/:bookId/`, controller.getBookAuthors);

module.exports = authorRouter;
