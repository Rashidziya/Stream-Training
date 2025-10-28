const User = require('./userModel');

User.deleteOne({name:"rashid1"})
.then(res=>{
    console.log("user deleted successfully ",res);
})
.catch(err=>{
    console.log("Error while deleting user ",err);
})