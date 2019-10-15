const languagesStore = require(`../stores/languages-store`);
const authorsStore = require(`../stores/authors-store`);

const NotFoundError = require(`../errors/not-found-error`);
const BadRequestError = require(`../errors/bad-request-error`);

class ArticlesController {
  constructor(articlesStore) {
    this.articlesStore = articlesStore;
  }

  getArticle = async (req, res) => {
    const articleId = req.params.articleId;
    const langId = req.params.langId;
    const authorId = req.params.authorId;
    const bookId = req.params.bookId;

    const data = await this.articlesStore.getArticle(langId, bookId, articleId, authorId);

    if (data) {
      res.send(data);
    } else {
      throw new NotFoundError(`Article '${articleId}' not found for book '${bookId} in '${langId} language'`);
    }
  };

  getArticleMenu = async (req, res) => {
    const bookId = req.params.bookId;
    const langId = req.params.langId;
    const articleId = req.params.articleId;

    const isLangValid = languagesStore.getLangById(langId);
    const allArticles = await this.articlesStore.getDataArticlesById(articleId, bookId);

    if (allArticles && allArticles.length && isLangValid) {
      const articleMenu = allArticles.map((a) => {
        const langName = languagesStore.getLangName(a.langId, langId);
        const authorName = authorsStore.getAuthorName(a.authorId, langId);

        return {
          ...a,
          langName,
          authorName
        };
      });

      res.send(articleMenu);
    } else {
      throw new NotFoundError(`Article '${articleId}' not found for book '${bookId} in '${langId} language'`);
    }
  };
}

module.exports = ArticlesController;
