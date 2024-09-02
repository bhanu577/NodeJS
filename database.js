const { MongoClient }=require("mongodb");

//connecting to clinet
const URI = "mongodb+srv://bhanuCustom:bkJooL7Xjk22G6Kk@customlearn.zkvc4.mongodb.net/";
const client = new MongoClient(URI);

const dbName = 'Node';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Users');

  const insertResult = await collection.insertMany([{ firstName:'Manohar',lastName:'ch',cityName:'Vijayawada',countryName:'India' }]);
  console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...
//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);

//   const updateResult =await collection.updateOne({firstName:'Bhanu'},{$set:{lastName:'prakash'}});
//   console.log('Updated Document =>',updateResult);

//   const removeRecord = await collection.deleteMany({firstName:'Manohar'});
//   console.log('Record Deleted =>',removeRecord);

//   const findResult1 = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult1);


const noOfRecords = await collection.countDocuments({});
console.log("No Of Documents in users data base",noOfRecords);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());