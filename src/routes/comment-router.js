const express = require(`express`);
const controller = require(`../controllers/comment-controller`);

const commentRouter = new express.Router();

commentRouter.get(`/:commentId`, controller.getCommentById);

module.exports = commentRouter;
