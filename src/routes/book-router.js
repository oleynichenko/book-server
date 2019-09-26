const express = require(`express`);
const controller = require(`../controllers/book-controller`);

const bookRouter = new express.Router();

bookRouter.get(`/:bookId/langs`, controller.getBookLangs);
bookRouter.get(`/:bookId/:langId`, controller.getBookData);

module.exports = bookRouter;
