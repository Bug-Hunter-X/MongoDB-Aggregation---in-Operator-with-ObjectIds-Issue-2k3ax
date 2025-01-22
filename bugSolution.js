```javascript
//Correct use of $in operator with properly formatted ObjectIds
const { MongoClient } = require('mongodb');
const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('yourDatabaseName');
    const collection = db.collection('yourCollectionName');
    const objectIds = [
      new ObjectId("651a7e8a6a98070f77e77f76"),
      new ObjectId("651a7e8a6a98070f77e77f77")
    ];
    const result = await collection.aggregate([
      {
        $match: {
          _id: { $in: objectIds }
        }
      },
      {
        $lookup: {
          from: "otherCollection",
          localField: "someField",
          foreignField: "_id",
          as: "relatedData"
        }
      }
    ]).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```