const bookStore = require(`../stores/books-store`);
const articleStore = require(`../stores/articles-store`);
const languageStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);
const commentsStore = require(`../stores/comments-store`);

// langId - это всегда язык интерфейса

const getBookInterface = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;

  const sideMenu = bookStore.getBookSideMenu(langId, bookId);
  const interfaceLangs = bookStore.getInterfaceLangs(bookId);
  // берем доступные языка из книги
  const langsIds = bookStore.getBookLangs(bookId);
  // const langMenu = languageStore.getLangNames(langsIds, langId);
  const mainMenu = bookStore.getBookMainMenu(langId, bookId);
  const sources = bookStore.getBookSources(bookId);
  const title = bookStore.getTitle(langId, bookId);

  const data = {
    title,
    sources,
    interfaceLangs,
    sideMenu,
    mainMenu,
    bookId,
    langId
  };

  res.send(data);
};

const getArticleMenu = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;
  const articleId = req.params.articleId;

  const allArticles = articleStore.getDataArticlesById(articleId, bookId);
  const bookSources = bookStore.getBookSources(bookId);

  // нужно выкинуть статьи авторов которых нет в sources книги
  const allowedArticles = allArticles.filter((a) => {
    const source = bookSources.find((s) => s.langId === a.langId);

    return (source) ? source.authors.includes(a.authorId) : false;
  });

  const articleMenu = allowedArticles.map((a) => {
    const langName = languageStore.getLangName(a.langId, langId);
    const authorName = authorsStore.getAuthorName(a.authorId, langId);

    return {
      ...a,
      title: `${langName} - ${authorName}`,
    };
  });

  res.send(articleMenu);
};

const getLangMenu = (req, res) => {
  const langId = req.params.langId;
  const langsIds = req.params.langsIds.split(`-`);

  const langMenu = languageStore.getLangNames(langsIds, langId);

  res.send(langMenu);
};

const getCommentMenu = (req, res) => {
  const langId = req.params.langId;
  const bookId = req.params.bookId;
  const articleId = req.params.articleId;

  const comments = commentsStore.getCommentsByArticle(articleId, bookId);

  const commentsLangs = comments.reduce((res, c) => {
    if(!res.includes(c.langId)) {
      res.push(c.langId);
    }

    return res;
  }, []);

  if (commentsLangs.length) {
    const commentMenu = languageStore.getLangNames(commentsLangs, langId);

    comments.forEach((c) => {
      const commentMenuItem = commentMenu.find((i) => {
        return i.langId === c.langId;
      });

      const commentAuthorName = authorsStore.getAuthorName(c.authorId, c.langId);

      const commentData = {
        commentId: c.commentId,
        title: c.title,
        authorName: commentAuthorName,
        authorId: c.authorId
      };

      commentMenuItem.comments = commentMenuItem.comments || [];
      commentMenuItem.comments.push(commentData);
    });

    res.send(commentMenu);
  } else {
    res.send(null);
  }
};

const getInterfaceLangs = (req, res) => {
  const bookId = req.params.bookId;

  res.send(bookStore.getInterfaceLangs(bookId));
};

module.exports = {
  getBookInterface,
  getArticleMenu,
  getLangMenu,
  getCommentMenu,
  getInterfaceLangs
};
