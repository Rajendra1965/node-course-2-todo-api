const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDN server');
    
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo.', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    db.collection('MongoUsers').insertOne({
        name: 'rajendra',
        age: 55,
        location: 'Bhubaneswar'
    }, (err, result) => {
        if (err) {
            return console.log('Could not create collection and insert record',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    db.close();
});