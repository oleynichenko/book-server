const express = require(`express`);
const controller = require(`../controllers/comment-controller`);

const commentRouter = new express.Router();

commentRouter.get(`/menu/:articleId/:langId/:bookId`, controller.getCommentMenu);

commentRouter.get(`/:commentId/:authorId/:langId/:bookId/:articleId`, controller.getComment);

module.exports = commentRouter;
