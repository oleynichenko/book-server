const {getDb} = require(`../db`);

const getCollection = async () => {
  const db = await getDb();

  return db.collection(`lessons`);
};

class LessonsStore {
  constructor(collection) {
    this.collection = collection;
  }

  getLessons(book, article) {
    const query = {
      articleIds: article,
      bookId: book
    };

    return this.collection.find(query).toArray();
  }
}

module.exports = async () => {
  const collection = await getCollection()
    .catch((error) => console.error(`Failed to set up "lessons"-collection`, error));

  return new LessonsStore(collection);
};
