const express = require(`express`);
const controller = require(`../controllers/book-controller`);

const bookRouter = new express.Router();

bookRouter.get(`/langs/:bookId/`, controller.getBookLangs);
bookRouter.get(`/:langId/:bookId`, controller.getBookData);
bookRouter.get(`/:langId/article-menu/:bookId/:articleId`, controller.getArticleMenu);
bookRouter.get(`/:langId/comment-menu/:bookId/:articleId`, controller.getCommentMenu);

module.exports = bookRouter;
