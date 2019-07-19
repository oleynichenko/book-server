const _languages = require(`../db/data/languages.json`);

const _getLanguages = () => {
  return _languages;
};

const _getLanguagesByIds = (ids) => {
  const languages = _getLanguages();
  return languages.filter((l) => ids.includes(l.langId));
};

// ids: [lang], lang - язык необходимого перевода
const getLangNames = (ids, lang) => {
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
  getLangNames,
  getLangName
};

