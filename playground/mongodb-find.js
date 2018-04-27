// const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDN server');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch records from the collection');
    // });
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos : ${count}`);        
    },(err) => {
        console.log('Unable to fetch records from the collection');
    });
    // db.close();
});