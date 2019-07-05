// required environment variables
[
  `NODE_ENV`,
  `PORT`,
  `HOST`,
  `DB_HOST`,
  `DB_USER`,
  `DB_PASSWORD`,
  `DB_NAME`
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

const config = {
  HOST: process.env.HOST,
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV,
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD
};

module.exports = config;
