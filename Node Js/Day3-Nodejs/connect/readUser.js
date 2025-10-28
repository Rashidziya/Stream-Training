// import {User} from './userModel';

const User = require('./userModel');

User.find()
.then(user=>{
    console.log("All users : ",user);
})
.catch(error=>{
    console.log("error while reading data ",error);
})