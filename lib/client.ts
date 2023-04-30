import { MongoClient } from "mongodb";

const uri: string | undefined = process.env.MONGODB_URI;

const client = new MongoClient(uri ? uri : "");

export default client.db(process.env.MONGODB_COLLECTION);
