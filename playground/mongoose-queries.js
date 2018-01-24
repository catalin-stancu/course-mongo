const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5a67af49fa38fd0a5887170a11';

// if(!ObjectID.isValid(id)){
//     console.log("Id not valid");
// }

// Todo.find({
//     _id: id
// }).then((result) => {
//     console.log('Todos', result);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log('Todo By Id', todo);
// }).catch( (e) => console.log(e));

var id = "6a67b972e0e3b0977fc11cc3ddd";

if(!ObjectID.isValid(id)){
    console.log("Id not valid");
}

User.findById(id).then((user) => {
    if(!user){
        return console.log("ID not found");
    }
    console.log("User By Id: ", user);
}).catch((e) => {
    console.log(e);
});

