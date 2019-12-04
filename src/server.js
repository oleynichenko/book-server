const express = require(`express`);
const config = require(`./config`);
const routes = require(`./routes`);
const allowAccess = require(`./middlewares/allow-access`);

const _createServer = async () => {
  const server = express();

  if (config.NODE_ENV === `development`) {
    server.use(allowAccess);
  }

  await routes.init(server);

  return server;
};

const run = async () => {
  const server = await _createServer();

  server.use(express.static(`static`));

  server.listen(config.PORT, (err) => {
    if (err) {
      return console.error(`Ошибка при запуске сервера`, err.message);
    }

    return console.info(`Сервер запущен на ${config.HOST}:${config.PORT}`);
  });
};

module.exports = {
  run
};
