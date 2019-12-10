const {getDb} = require(`../db`);

const getCollection = async () => {
  const db = await getDb();

  return db.collection(`comments`);
};

class CommentsStore {
  constructor(collection) {
    this.collection = collection;
  }

  getDataComments(id, bookId) {
    const query = {
      articleId: id,
      bookId
    };

    const projection = {
      _id: 0,
      commentId: 1,
      authorId: 1,
      translatorId: 1,
      langId: 1,
      articleId: 1,
      title: 1
    };

    return this.collection.find(query, {projection}).toArray();
  }

  getComment(lang, id, author, book, article, translator) {
    const query = {
      langId: lang,
      commentId: id,
      authorId: author,
      bookId: book,
      articleId: article
    };

    if (translator) {
      query.translatorId = translator;
    }

    return this.collection.findOne(query);
  }
}

module.exports = async () => {
  const collection = await getCollection()
    .catch((error) => console.error(`Failed to set up "comments"-collection`, error));

  return new CommentsStore(collection);
};

