import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const uri = 'mongodb+srv://charlie:udknVOcHQmSYqFcR@cluster0.t5m17.mongodb.net/listing_db?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('listing_db');
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;