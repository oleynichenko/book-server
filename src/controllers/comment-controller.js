const commentsStore = require(`../stores/comments-store`);

const getComment = (req, res) => {
  const commentId = req.params.commentId;
  const langId = req.params.langId;
  const authorId = req.params.authorId;

  const data = commentsStore.getComment(langId, commentId, authorId);

  res.send(data);
};

module.exports = {
  getComment
};
