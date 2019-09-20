const books = require(`../db/data/books/ptiha.json`);

const getBook = (id) => {
  return books.find((b) => b.bookId === id);
};

const getBookLangs = (id) => {
  const book = getBook(id);

  return (book) ? book.langs : null;
};

// const getBookAuthors = (id) => {
//   const sources = getBook(id).sources;
//
//   return sources.reduce((res, s) => {
//     s.authors.forEach((a) => {
//       if (!res.includes(a)) {
//         res.push(a);
//       }
//     });
//   }, []);
// };

module.exports = {
  getBook,
  getBookLangs
};

