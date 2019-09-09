const e = require(`../db/data/articles/pticha-en-bb.json`);
const f = require(`../db/data/articles/pticha-he-orhasulam.json`);
const g = require(`../db/data/articles/pticha-ru-bb.json`);
const h = require(`../db/data/articles/pticha-ru-zh.json`);
const aa = require(`../db/data/articles/foreword-zoar-he-orhasulam`);
const b = require(`../db/data/articles/foreword-zoar-ru-zh`);
const c = require(`../db/data/articles/foreword-zoar-ru-bb`);
const d = require(`../db/data/articles/foreword-zoar-en-bb`);

const _articles = aa.concat(b, c, d, f, e, g, h);

const getArticle = (lang, id, author) => {
  return _articles.find((a) => {
    return a.articleId === id
      && a.authorId === author
      && a.langId === lang;
  });
};

const getDataArticlesById = (id, bookId) => {
  return _articles
    .filter((a) => a.articleId === id && a.bookId === bookId)
    .map((a) => {
      return {
        articleId: a.articleId,
        authorId: a.authorId,
        langId: a.langId,
        articleTitle: a.title
      };
    });
};

module.exports = {
  getArticle,
  getDataArticlesById
};

