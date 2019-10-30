const validator = {
  $jsonSchema: {
    bsonType: `object`,
    required: [
      `langId`,
      `authorId`,
      `bookId`,
      `articleIds`,
      `src`
    ],
    properties: {
      src: {
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
      date: {
        bsonType: `date`,
        description: `must be a date`
      },
      articleIds: {
        bsonType: [
          `array`
        ],
        items: {
          bsonType: `string`,
          description: `must be a string`
        },
        description: `must be an array and is required`
      },
      bookId: {
        bsonType: `string`,
        description: `must be a string and is required`
      }
    }
  }
};
