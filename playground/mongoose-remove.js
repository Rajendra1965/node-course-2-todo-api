const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
//     console.log(result);
// });.js

//Todo.findOneAndRemove()
//Todo findbyIdAndRemove
Todo.findByIdAndRemove('5ae80dfbc162f9d8236a8474').then((todo) => {
    console.log(todo);
})