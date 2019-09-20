const _libraries = require(`../db/data/libraries`);

const getLibraryById = (id) => {
  return _libraries.find((l) => l.id === id);
};

const getLibraryLangs = (id) => {
  const library = _libraries.find((l) => l.id === id);

  return (library) ? library.langs : null;
};

module.exports = {
  getLibraryById,
  getLibraryLangs
};

