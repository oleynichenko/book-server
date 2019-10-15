const express = require(`express`);
const {async} = require(`../util`);

const CommentsController = require(`../controllers/comment-controller`);
const getCommentsStore = require(`../stores/comments-store`);

module.exports = async () => {
  const commentRouter = new express.Router();

  const commentsStore = await getCommentsStore();
  const controller = new CommentsController(commentsStore);

  commentRouter.get(
      `/menu/:articleId/:langId/:bookId`,
      async(controller.getCommentMenu)
  );

  commentRouter.get(
      `/:commentId/:authorId/:langId/:bookId/:articleId`,
      async(controller.getComment)
  );

  return commentRouter;
};
