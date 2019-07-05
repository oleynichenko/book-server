require(`dotenv`).config();
const server = require(`./src/server`);
const connectDb = require(`./src/db`);

connectDb()
  .on(`error`, () => {
    console.log(`Error in connection with db`);
  })
  .on(`connected`, () => {
    console.log(`DB is connected`);
    server.run();
  });
