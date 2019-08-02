const _comments = require(`../db/data/comments/or-shalom-ru-zaharin.json`);

const getCommentsByArticle = (id) => {
  return _comments.filter((c) => {
    return c.articleId === id;
  });
};

const getCommentById = (id) => {
  return _comments.find((c) => {
    return c.commentId === id;
  });
};

module.exports = {
  getCommentsByArticle,
  getCommentById
};

