const bookStore = require(`../stores/books-store`);
const articleStore = require(`../stores/articles-store`);
const languageStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);

// langId - это всегда язык интерфейса

const getBookInterface = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;

  const sideMenu = bookStore.getBookSideMenu(langId, bookId);
  const interfaceLangs = bookStore.getInterfaceLangs(bookId);
  // берем доступные языка из книги
  const langsIds = bookStore.getBookLangs(bookId);
  const langMenu = languageStore.getLangNames(langsIds, langId);

  const title = bookStore.getTitle(langId, bookId);

  const data = {
    title,
    interfaceLangs,
    sideMenu,
    // langMenu,
    bookId,
    langId
  };

  res.send(data);
};

const getArticleInterface = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;
  const articleId = req.params.articleId;

  const allArticles = articleStore.getArticlesById(articleId);
  const bookSources = bookStore.getBookSources(bookId);

  // нужно выкинуть статьи авторов которых нет в sources книги
  const allowedArticles = allArticles.filter((a) => {
    const source = bookSources.find((s) => s.langId === a.langId);

    return (source) ? source.authors.includes(a.authorId) : false;
  });

  const articles = allowedArticles.map((a) => {
    const langName = languageStore.getLangName(a.langId, langId);
    const authorName = authorsStore.getAuthorName(a.authorId, langId);

    return {...a, title: `${langName} - ${authorName}`};
  });

  const data = {
    articleId,
    articles
  };

  res.send(data);
};

const getLangMenu = (req, res) => {
  const langId = req.params.langId;
  const langsIds = req.params.langsIds.split(`-`);

  const langMenu = languageStore.getLangNames(langsIds, langId);

  res.send(langMenu);
};

module.exports = {
  getBookInterface,
  getArticleInterface,
  getLangMenu
};
