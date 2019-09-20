const config = require(`../config`);
const allowAccess = require(`../middlewares/allow-access`);

const bookRouter = require(`./book-router`);
const articleRouter = require(`./article-router`);
const commentRouter = require(`./comment-router`);
const pageRouter = require(`./page-router`);
const libraryRouter = require(`./library-router`);
const langsRouter = require(`./langs-router`);
const handleErrors = require(`../errors/handle-errors`);

const init = (app) => {
  if (config.NODE_ENV === `development`) {
    app.use(allowAccess);
  }

  app.use(`/book`, bookRouter);
  app.use(`/article`, articleRouter);
  app.use(`/comment`, commentRouter);
  app.use(`/page`, pageRouter);
  app.use(`/library`, libraryRouter);
  app.use(`/langs`, langsRouter);
  app.use(handleErrors);
};

module.exports = {
  init
};
