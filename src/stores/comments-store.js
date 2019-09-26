const a = require(`../db/data/comments/pticha-ob-ru-zh`);
const b = require(`../db/data/comments/pticha-os-ru-zh`);
const e = require(`../db/data/comments/foreword-zoar-brand-ru-zh`);

const _comments = a.concat(b, e);

const getDataComments = (id, bookId) => {
  return _comments
    .filter((c) => c.articleId === id && c.bookId === bookId)
    .map((c) => {
      return {
        id: c.commentId,
        author: c.authorId,
        lang: c.langId,
        article: c.articleId,
        title: c.title
      };
    });
};

const getComment = (lang, id, author, book, article) => {
  return _comments.find((c) => {
    return c.commentId === id
      && c.authorId === author
      && c.bookId === book
      && c.articleId === article
      && c.langId === lang;
  });
};

module.exports = {
  getDataComments,
  getComment
};

