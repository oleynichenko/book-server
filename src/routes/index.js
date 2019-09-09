const config = require(`../config`);
const allowAccess = require(`../middlewares/allow-access`);

const interfaceRouter = require(`./interface-router`);
const articleRouter = require(`./article-router`);
const commentRouter = require(`./comment-router`);
const pageRouter = require(`./page-router`);
const libraryRouter = require(`./library-router`);

const init = (app) => {
  if (config.NODE_ENV === `development`) {
    app.use(allowAccess);
  }

  app.use(`/interface`, interfaceRouter);
  app.use(`/article`, articleRouter);
  app.use(`/comment`, commentRouter);
  app.use(`/page`, pageRouter);
  app.use(`/library`, libraryRouter);
};

module.exports = {
  init
};
