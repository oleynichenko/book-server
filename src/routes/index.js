const config = require(`../config`);
const interfaceRouter = require(`./interface-router`);
const articleRouter = require(`./article-router`);
const commentRouter = require(`./comment-router`);
const allowAccess = require(`../middlewares/allow-access`);

const init = (app) => {
  if (config.NODE_ENV === `development`) {
    app.use(allowAccess);
  }

  app.use(`/interface`, interfaceRouter);
  app.use(`/article`, articleRouter);
  app.use(`/comment`, commentRouter);
};

module.exports = {
  init
};
