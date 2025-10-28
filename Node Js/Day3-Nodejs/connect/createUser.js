const User = require('./userModel');
const newUser = new User({
    name:"rashid1",
    email:"rashid1@accenture.com",
    age:23
});
newUser.save()
.then((user)=>{
    console.log("user created successfully ",user)
})
.catch((err)=>{
    console.log("Creation failed ",err);
})