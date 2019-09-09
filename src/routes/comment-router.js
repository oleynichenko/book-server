const express = require(`express`);
const controller = require(`../controllers/comment-controller`);

const commentRouter = new express.Router();

commentRouter.get(`/:langId/:commentId/:authorId`, controller.getComment);

module.exports = commentRouter;
