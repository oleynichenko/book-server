const _libraries = require(`../db/data/libraries`);

const getBooksIds = (id) => {
  const library = _libraries.find((l) => l.id === id);

  return (library) ? library.books : [];
};

module.exports = {
  getBooksIds
};

