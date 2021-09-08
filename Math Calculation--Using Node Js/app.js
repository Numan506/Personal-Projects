const express = require("express");
const app = express();
const userRouter = require('./route/user.routes');
var bodyParser = require('body-parser');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

 

app.use("/user",userRouter);

app.get('/',(req,res)=>{
    res.statusCode=300;
    res.sendFile(__dirname+"/Page/home.html")
});
app.get('/about',(req,res)=>{
    res.statusCode=300;
   res.sendFile(__dirname+"/Page/about.html")
});
app.get('/service',(req,res)=>{
    res.statusCode=300;
   res.sendFile(__dirname+"/Page/service.html")
});
app.get('/test',(req,res)=>{
    res.statusCode=300;
   res.sendFile(__dirname+"/Page/index.html")
});

app.get('/circle',(req,res)=>{
    res.statusCode=300;
   res.sendFile(__dirname+"/Page/circle.html")
});
app.post('/circle',(req,res)=>{
  const Radius = req.body.radius;  
  const result = 0.5*Radius*Radius;
  res.send(`Result is: ${result}`);
});

app.get('/triangle',(req,res)=>{
    res.statusCode=300;
   res.sendFile(__dirname+"/Page/triangle.html")
});
app.post('/triangle',(req,res)=>{
  const Base = req.body.base;
  const Height = req.body.height;
  const result = 0.5*Base*Height;
  res.send(`Result is: ${result}`);
});
app.use((req,res)=>{
    res.send("<h3>404! This is Error Page</h3>")
});

module.exports=app;
