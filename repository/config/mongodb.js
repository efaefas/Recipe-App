const { MongoClient } = require('mongodb');
const config = require('../../configs.json')

const uri = config.database.uri;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = config.database.dbName

async function connect() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

function getDb() {
  return client.db(dbName);
}

module.exports = { getDb };
