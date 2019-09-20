const bookStore = require(`../stores/books-store`);
const articleStore = require(`../stores/articles-store`);
const languageStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);
const commentsStore = require(`../stores/comments-store`);
const NotFoundError = require(`../errors/not-found-error`);
// langId - это всегда язык интерфейса

const getBookLangs = (req, res) => {
  const bookId = req.params.bookId;
  const langs = bookStore.getBookLangs(bookId);

  if (langs) {
    res.send(langs);
  } else {
    // не найдена книга
    throw new NotFoundError(`Book '${bookId}' not found`);
  }
};

const _getBookSideMenu = (lang, menu) => {
  return menu.map((item) => {
    const newItem = {
      articleId: item.articleId,
      title: item.title[lang]
    };

    if (item.children) {
      newItem.children = item.children.map((child) => {
        return {
          articleId: child.articleId,
          title: child.title[lang]
        };
      });
    }

    return newItem;
  });
};

const _getBookMainMenu = (lang, menu) => {
  return menu.map((item) => {
    return {
      id: item.pageId,
      title: item.title[lang]
    };
  });
};

const getBookData = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;

  const book = bookStore.getBook(bookId);

  if (book) {
    if (book.langs.includes(langId)) {
      const sideMenu = _getBookSideMenu(langId, book.sideMenu);
      const title =  book.title[langId];
      const mainMenu = _getBookMainMenu(langId, book.mainMenu);
      const langs = book.langs;
      const sources = book.sources;
      const libraryUrl = book.libraryUrl;

      const data = {
        title,
        libraryUrl,
        sources,
        langs,
        sideMenu,
        mainMenu,
        langId // надо ли?
      };

      res.send(data);
    } else {
      throw new BadRequestError(`Book is not available on '${langId}' language`);
    }
  } else {
    throw new NotFoundError(`Book '${bookId}' not found`);
  }
};

// требует переделки: много запросов к базе
const getArticleMenu = (req, res) => {
  const bookId = req.params.bookId;
  const langId = req.params.langId;
  const articleId = req.params.articleId;

  const allArticles = articleStore.getDataArticlesById(articleId, bookId);

  if (allArticles && allArticles.length) {
    const book = bookStore.getBook(bookId);
    const bookSources = book.sources;

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
  } else {
    throw new NotFoundError(`Article '${articleId}' not found for book '${bookId}'`);
  }
};

const getCommentMenu = (req, res) => {
  const langId = req.params.langId;
  const bookId = req.params.bookId;
  const articleId = req.params.articleId;

  const comments = commentsStore.getCommentsByArticle(articleId, bookId);

  if (comments && comments.length) {
    const commentsLangs = comments.reduce((res, c) => {
      if(!res.includes(c.langId)) {
        res.push(c.langId);
      }

      return res;
    }, []);

    // const commentMenu = languageStore.getLangNames(commentsLangs, langId);
    const commentMenu = languageStore.getLangsMenu(commentsLangs, langId);

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
    res.send([]);
  }
};

module.exports = {
  getBookData,
  getArticleMenu,
  getCommentMenu,
  getBookLangs
};
