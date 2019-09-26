const commentsStore = require(`../stores/comments-store`);
const languagesStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);

const NotFoundError = require(`../errors/not-found-error`);
const BadRequestError = require(`../errors/bad-request-error`);

const getComment = (req, res) => {
  const commentId = req.params.commentId;
  const langId = req.params.langId;
  const authorId = req.params.authorId;
  const bookId = req.params.bookId;
  const articleId = req.params.articleId;

  const data = commentsStore.getComment(langId, commentId, authorId, bookId, articleId);

  res.send(data);
};

const getCommentMenu = (req, res) => {
  const langId = req.params.langId;
  const bookId = req.params.bookId;
  const articleId = req.params.articleId;

  const comments = commentsStore.getDataComments(articleId, bookId);

  if (comments && comments.length) {
    const commentsLangs = comments.reduce((result, c) => {
      if (!result.includes(c.lang)) {
        result.push(c.lang);
      }

      return result;
    }, []);

    const commentMenu = languagesStore.getLangsMenu(commentsLangs, langId);

    comments.forEach((c) => {
      const commentMenuItem = commentMenu.find((i) => {
        return i.langId === c.lang;
      });

      c.authorName = authorsStore.getAuthorName(c.author, c.lang);

      commentMenuItem.comments = commentMenuItem.comments || [];
      commentMenuItem.comments.push(c);
    });

    res.send(commentMenu);
  } else {
    res.send([]);
  }
};

module.exports = {
  getComment,
  getCommentMenu
};
