const {MongoClient} = require(`mongodb`);
const config = require(`../config`);

let db;
let dbClient;

const getDbUri = (host, name, user, password) => {
  return `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`;
};

const connectDb = async () => {
  const url = getDbUri(
      config.DB_HOST,
      config.DB_NAME,
      config.DB_USER,
      config.DB_PASSWORD
  );

  db = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((client) => {
      console.log(`DB "${config.DB_NAME}" is connected`);
      dbClient = client;

      return client.db(config.DB_NAME);
    })
    .catch(() => {
      console.log(`Error in connection with db`);
      process.exit(1);
    });

  return db;
};

const getDb = async () => {
  if (!db) {
    db = await connectDb();
  }

  return db;
};

const closeDbClient = () => {
  if (!dbClient) {
    console.log(`Попытка закрыть неподключенное соединение к базе`);
  } else {
    dbClient.close();
  }
};

process.on(`SIGINT`, () => {
  closeDbClient();

  process.exit();
});

module.exports = {
  connectDb,
  closeDbClient,
  getDb
};
