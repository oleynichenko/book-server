const validator = {
  $jsonSchema: {
    bsonType: `object`,
    required: [
      `commentId`,
      `langId`,
      `authorId`,
      `title`,
      `bookId`,
      `content`,
      `articleId`
    ],
    properties: {
      commentId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      langId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      authorId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      title: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      articleId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      bookId: {
        bsonType: `string`,
        description: `must be a string and is required`
      }
    }
  }
};
