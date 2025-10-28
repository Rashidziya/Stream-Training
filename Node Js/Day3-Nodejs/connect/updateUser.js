const User = require('./userModel');

User.updateOne(
    // {name:"rashid"},
    // {$set:{age:24}}
    {name:"rashidziya"}
)
.then(result=>{
    console.log("user age updated Successfully ",result);
})
.catch(error=>{
    console.log("error while updating user data",error);
})