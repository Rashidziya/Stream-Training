const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/products",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',()=>{
    console.log('connection failed ');
});
db.once('open',()=>{
    console.log('connection successfull');
});

module.exports = mongoose;