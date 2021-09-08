const express = require("express");
const router = express.Router();


router.get('/about',(req,res)=>{
    res.send('<h3>Hello I am About Page</h3>')
});
router.get('/register',(req,res)=>{
    res.send('<h3>Hello I am Register Page</h3>')
});

module.exports=router;