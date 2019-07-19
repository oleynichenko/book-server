const ptichaEnBb = require(`../db/data/articles/pticha-en-bb.json`);
const ptichaHeBb = require(`../db/data/articles/pticha-he-bb.json`);
const ptichaRuBb = require(`../db/data/articles/pticha-ru-bb.json`);
const ptichaRuZh = require(`../db/data/articles/pticha-ru-zh.json`);

const _articles = ptichaEnBb.concat(ptichaHeBb, ptichaRuBb, ptichaRuZh);

const getArticle = (lang, id, author) => {
  return _articles.find((a) => {
    return a.articleId === id
      && a.authorId === author
      && a.langId === lang;
  });
};

const getArticlesById = (id) => {
  return _articles
    .filter((a) => a.articleId === id)
    .map((a) => {
      return {
        articleId: a.articleId,
        authorId: a.authorId,
        langId: a.langId
      };
    });
};

module.exports = {
  getArticle,
  getArticlesById
};

