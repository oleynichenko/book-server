const express = require(`express`);
const config = require(`./config`);
const routes = require(`./routes`);

const server = express();

routes.init(server);

const run = () => {
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
