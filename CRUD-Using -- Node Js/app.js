const express = require("express");
const app = express();
const mysql = require("mysql")

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "node_crud"
})

connection.connect((err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("Connection Success")
    }
})


app.get("/",(req,res)=>{
    let sql = "SELECT * FROM users";
    connection.query(sql,(err,rows)=>{
        if(err){
            console.log(err)
        }else{
            res.render(__dirname+'/home.ejs',{
                title:"CRUD System Using Node Js",
                user:rows
            })
          }
      })
})

app.get("/save",(req,res)=>{
    res.render(__dirname+'/save.ejs',{
        title:"CRUD system using Node Js"
})
})

app.post("/save",(req,res)=>{
    let data = {name:req.body.name, email:req.body.email, phone:req.body.number};

    let sql = 'INSERT INTO users SET ?';
    let query = connection.query(sql,data,(err,results)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/');
        }
    })

})


app.get("/edit/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id)
    let sql = `Select * from users where Id= ${id}`
    console.log(sql)
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.render(__dirname+'/edit.ejs',{
                title:"CRUD System Using Node Js",
                user:result[0]

            })
        }
    })
})


app.post("/edit/:id",(req,res)=>{
   
    let id = req.body.id;
    let sql = "update users SET name= '"+req.body.name+"', email ='"+req.body.email+"', phone='"+req.body.number+"' where id="+id;
  
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
        }
    })
})

app.get("/delete/:id",(req,res)=>{
    const id = req.params.id;
    let sql = `DELETE  from users where Id= ${id}`
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
        }
    })
})

module.exports= app