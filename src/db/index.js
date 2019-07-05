const mongoose = require(`mongoose`);
const config = require(`../config`);

const getDbUri = (host, name, user, password) => {
  return `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`;
};

const connectDb = () => {
  const dbURI = getDbUri(
      config.DB_HOST,
      config.DB_NAME,
      config.DB_USER,
      config.DB_PASSWORD
  );

  mongoose.connect(dbURI, {useNewUrlParser: true});

  return mongoose.connection;
};

module.exports = connectDb;
