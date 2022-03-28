var MongoClient= require('mongodb').MongoClient;

// or as an es module:
// import { MongoClient } from 'mongodb'
// Connection URL
const url = 'mongodb+srv://MeenalPrakash:meenal2003@cluster0.wwhtx.mongodb.net/ProjectPayRoll?retryWrites=true&w=majority';
const client = new MongoClient(url);
// Database Name
const dbName = 'ProjectPayRoll';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('USER');
  //  const insertResult = await collection.insertMany([{ name: 'meenal' }, { password: 'meenal2123' }]);
  //  console.log('Inserted documents =>', insertResult);


    // the following code examples can be pasted here...
    return 'done.';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());