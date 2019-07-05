const express = require(`express`);
const config = require(`./config`);

const server = express();

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
