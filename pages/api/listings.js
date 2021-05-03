import nextConnect from 'next-connect';
import middleware from '../../middleware/db';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection('listings')
    .find({})
    .toArray();
  
  res.send(doc);
});

handler.post(async (req, res) => {
  let data = req.body;
  let doc = await req.db.collection('listings')
    .insertOne(data);
  res.json(doc);
})



export default handler;