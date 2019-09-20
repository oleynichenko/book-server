const _languages = require(`../db/data/languages.json`);

const _getLanguages = () => {
  return _languages;
};

const _getLanguagesByIds = (ids) => {
  const languages = _getLanguages();
  return languages.filter((l) => ids.includes(l.langId));
};

const getLangById = (id) => {
  const languages = _getLanguages();
  return languages.find((l) => l.langId === id);
};

// ids: [lang], lang - язык необходимого перевода
const getLangsMenu = (ids, lang) => {
  const languages = _getLanguagesByIds(ids);

  return languages.map((item) => {
    return {
      langId: item.langId,
      name: item.name[lang]
    };
  });
};

const getLangName = (id, lang) => {
  const languages = _getLanguages();

  const language = languages.find((a) => {
    return a.langId === id;
  });

  return language.name[lang];
};

module.exports = {
  getLangsMenu,
  getLangName,
  getLangById
};

