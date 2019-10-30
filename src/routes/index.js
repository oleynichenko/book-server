const handleErrors = require(`../errors/handle-errors`);

const bookRouter = require(`./book-router`);
const pageRouter = require(`./page-router`);
const libraryRouter = require(`./library-router`);
const langsRouter = require(`./langs-router`);

const getArticlesRouter = require(`./article-router`);
const getCommentsRouter = require(`./comment-router`);
const getLessonsRouter = require(`./lesson-router`);

const init = async (app) => {
  const commentRouter = await getCommentsRouter();
  const articleRouter = await getArticlesRouter();
  const lessonRouter = await getLessonsRouter();

  app.use(`/books`, bookRouter);
  app.use(`/articles`, articleRouter);
  app.use(`/comments`, commentRouter);
  app.use(`/pages`, pageRouter);
  app.use(`/library`, libraryRouter);
  app.use(`/langs`, langsRouter);
  app.use(`/lessons`, lessonRouter);

  app.use(handleErrors);
};

module.exports = {
  init
};
