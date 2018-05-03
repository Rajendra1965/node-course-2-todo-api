const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
// bcrypt.genSalt(10,password,(err, salt)=>{
//     bcrypt.hash(password,salt,(err,hash) => {
//         console.log(hash);
//     })
// });

var hashedPassword = '$2a$10$x/9q4HBww7sB1oGIziVTZuPfWa52Ulo6WnS80hhcpur9822H31EzK';

bcrypt.compare(password,hashedPassword,(err, res) => {
    console.log(res);
});

// var data ={
//     id: 10
// }
// var token = jwt.sign(data, 'abc123');
// console.log(token);

// var decoded = jwt.verify(token, 'abc123');
// console.log('decoded ' , decoded);

// var message ='I am user numer 123';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data got changed, donot trust');
// }