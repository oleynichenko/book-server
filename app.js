require(`dotenv`).config();

const server = require(`./src/server`);
// const {connectDb} = require(`./src/db`);

server.run();
// connectDb()
//   .then(() => {
//     server.run();
//   });
