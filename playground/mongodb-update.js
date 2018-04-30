// const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDN server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID(`5ae303590b67a6568479e7cb`)
    },{
        $set:{
            text: 'Eat lunch and have deserts'
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    })
});