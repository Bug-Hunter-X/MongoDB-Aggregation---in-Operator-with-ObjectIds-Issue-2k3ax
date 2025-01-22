```javascript
//Incorrect use of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      _id: { $in: [ObjectId("651a7e8a6a98070f77e77f76"), ObjectId("651a7e8a6a98070f77e77f77")] }
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
]);
```