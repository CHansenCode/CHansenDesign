const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client.db(dbName);
