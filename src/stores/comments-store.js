const a = require(`../db/data/comments/pticha-ob-ru-zh`);
const b = require(`../db/data/comments/pticha-os-ru-zh`);
const e = require(`../db/data/comments/foreword-zoar-brand-ru-zh`);

const _comments = a.concat(b, e);

const getCommentsByArticle = (id, bookId) => {
  return _comments.filter((c) => {
    return c.articleId === id && c.bookId === bookId;
  });
};

const getComment = (lang, id, author) => {
  return _comments.find((c) => {
    return c.commentId === id
      && c.authorId === author
      && c.langId === lang;
  });
};

module.exports = {
  getCommentsByArticle,
  getComment
};

