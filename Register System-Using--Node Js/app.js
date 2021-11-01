const express = require("express");
const path = require("path")
const app = express();

const bcrypt = require('bcryptjs');

var mysql = require("mysql");
require("dotenv").config();
app.use(express.static("public"))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





// const result = path.join(__dirname,'./public') "when we use render system"
// app.use(express.static(result)) "when we use render system"
// app.set('view engine','hbs') "when we use render system"



var connection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE

})


connection.connect((err)=>{
    if(err){
        console.log("connection fail")
    }else{
        console.log("connection Success")
    }
})

app.get("/",(req,res)=>{
    // res.render('index') " this is render system"
    res.render(__dirname+'/index.hbs')
})

app.get("/register",(req,res)=>{
    // res.render('index') " this is render system"
    // res.render(__dirname+'/register.hbs')
    res.render(__dirname+"/register.hbs")
})

app.post("/register",(req,res)=>{
    // res.render('index') " this is render system"
    //  const name = req.body.name
    // const email = req.body.email
    // const password = req.body.password
    console.log(req.body)
    
    const {name,Email,password,confirmPassword} = req.body;
    
    

  
    connection.query('SELECT Email FROM users WHERE Email =?',[Email],async(error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length>0){
            return res.render(__dirname+'/register.hbs',{
             message: "The email is already  use"
            }) 
         }
        else if(password !==confirmPassword){
            return res.render(__dirname+'/register.hbs',{
                message:"The password does not match "
            })
        }
        let hashedPassword = await bcrypt.hash(password,8);
        console.log(hashedPassword)
        
        
        connection.query('INSERT INTO users SET?',{Name:name,Email:Email,Password:hashedPassword},(error,results)=>{
                 
            if(error){
                console.log(error)
            }else{
                console.log(results)
                return res.render(__dirname+'/register.hbs',{
                    
                    message:"User Registerd "
                })
            }
        })
    })
    

})

module.exports=app;