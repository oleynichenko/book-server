const commentsStore = require(`../stores/comments-store`);

const getCommentById = (req, res) => {
  const commentId = req.params.commentId;
  const data = commentsStore.getCommentById(commentId);

  res.send(data);
};

module.exports = {
  getCommentById
};
