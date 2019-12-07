const {getDb} = require(`../db`);

const getCollection = async () => {
  const db = await getDb();

  return db.collection(`articles`);
};

class AriclesStore {
  constructor(collection) {
    this.collection = collection;
  }

  getArticle(lang, book, id, author) {
    const query = {
      langId: lang,
      articleId: id,
      authorId: author,
      bookId: book
    };

    const projection = {
      _id: 0
    };

    return this.collection.findOne(query, {projection});
  }

  getDataArticlesById(id, bookId) {
    const query = {
      articleId: id,
      bookId
    };

    const projection = {
      _id: 0,
      articleId: 1,
      authorId: 1,
      langId: 1,
      title: 1
    };

    return this.collection.find(query, {projection}).toArray();
  }
}

module.exports = async () => {
  const collection = await getCollection()
    .catch((error) => console.error(`Failed to set up "articles"-collection`, error));

  return new AriclesStore(collection);
};
