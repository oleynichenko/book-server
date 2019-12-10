const languagesStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);

class CommentsController {
  constructor(commentsStore) {
    this.commentsStore = commentsStore;
  }

  getComment = async (req, res) => {
    const commentId = req.params.commentId;
    const langId = req.params.langId;
    const authorId = req.params.authorId;
    const bookId = req.params.bookId;
    const articleId = req.params.articleId;
    const translatorId = req.query.translatorId;

    const data = await this.commentsStore.getComment(langId, commentId, authorId, bookId, articleId, translatorId);

    if (data) {
      res.send(data);
    } else {
      res.send({});
    }
  };

  getCommentMenu = async (req, res) => {
    const langId = req.params.langId;
    const bookId = req.params.bookId;
    const articleId = req.params.articleId;

    const comments = await this.commentsStore.getDataComments(articleId, bookId);
    const isLangValid = languagesStore.getLangById(langId);

    if (comments && comments.length && isLangValid) {
      const commentsLangs = comments.reduce((result, c) => {
        if (!result.includes(c.langId)) {
          result.push(c.langId);
        }

        return result;
      }, []);

      const commentMenu = languagesStore.getLangsMenu(commentsLangs, langId);

      comments.forEach((c) => {
        const commentMenuItem = commentMenu.find((i) => {
          return i.langId === c.langId;
        });

        c.authorName = authorsStore.getAuthorName(c.authorId, c.langId);

        if (c.translatorId) {
          c.translatorName = authorsStore.getAuthorName(c.translatorId, c.langId);
        }

        commentMenuItem.comments = commentMenuItem.comments || [];
        commentMenuItem.comments.push(c);
      });

      res.send(commentMenu);
    } else {
      res.send([]);
    }
  }
}

module.exports = CommentsController;
