const validator = {
  $jsonSchema: {
    bsonType: `object`,
    required: [
      `articleId`,
      `authorId`,
      `langId`,
      `title`,
      `bookId`,
      `chunks`
    ],
    properties: {
      articleId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      authorId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      langId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      title: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      bookId: {
        bsonType: `string`,
        description: `must be a string and is required`
      },
      chunks: {
        bsonType: [`array`],
        items: {
          bsonType: `object`,
          required: [`chunkId`, `content`],
          properties: {
            chunkId: {
              bsonType: `string`,
              description: `must be a string and is required`
            },
            content: {
              bsonType: `string`,
              description: `must be a string and is required`
            },
          }
        },
        description: `must be a array of objects containing "chunkId" and "content"`
      }
    }
  }
};
