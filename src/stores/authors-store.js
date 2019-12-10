const _authors = require(`../db/data/authors/authors.json`);

const _getAuthors = () => {
  return _authors;
};

const _getAuthorsByIds = (ids) => {
  const authors = _getAuthors();

  return authors.filter((a) => ids.includes(a.authorId));
};

const getAuthorsByLang = (ids, lang) => {
  const authors = _getAuthorsByIds(ids);

  return authors.map((a) => {
    return {
      id: a.authorId,
      name: a.name[lang],
      description: a.description[lang],
      contacts: a.contacts,
      country: a.country[lang],
      img: a.img
    };
  });
};

const getAuthorsNames = (lang, ids) => {
  const authors = _getAuthorsByIds(ids);

  return authors.map((item) => {
    return {
      authorId: item.langId,
      name: item.name[lang]
    };
  });
};

const getAuthorName = (id, lang) => {
  const authors = _getAuthors();

  const author = authors.find((a) => {
    return a.authorId === id;
  });

  return author.name[lang];
};

const getAuthorNames = (id) => {
  const authors = _getAuthors();

  const author = authors.find((a) => {
    return a.authorId === id;
  });

  return author.name;
};

module.exports = {
  getAuthorsNames,
  getAuthorName,
  getAuthorsByLang,
  getAuthorNames
};
