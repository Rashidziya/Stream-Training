// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome Everyone from Default path</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Welcome Everyone from About</h1>");
// });

// app.get("/products", (req, res) => {
//   res.send("<h1>Welcome Everyone from prodcuts page </h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Welcome Everyone from contact page.</h1>");
// });
// app.get("/services", (req, res) => {
//   res.send("<h1>Welcome Everyone from services page.</h1>");
// });

// app.listen(PORT, () => {
//   console.log(`Server started at port : ${PORT}`);
// });





const express = require("express");
let app = express();
app.use(express.static('public'));

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/rashid',(req,res)=>{
    response ={
        first_name : req.query.first_name,
        last_name : req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
}).listen(8086,()=>{
    console.log("Server started at port : 8086");
})