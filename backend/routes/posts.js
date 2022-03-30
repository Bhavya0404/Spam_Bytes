const express = require('express');
const User2 = require('../model/userschema');
const router = express.Router();
const app=express();
require('../db/conn');

app.get('/' , (req, res)=> {
    res.send("this works");
});
app.get('/about', (req,res)=>{
      res.send("about page");
});
router.get('/dashboard', (req,res)=>{
     const {name , password} = req.body;
     if(!name || !password)
     {
         return res.status(402).json({ error:" please fill the enteries properly"});
     }
     User2.findOne({name:name})
     .then((checking) => {
         if(checking)
         {
             if(password == password)
             {
                 return res.send("aunthentication done");
             }
         }

     })

      res.send("dashboard");
});
router.get('/companies', (req,res)=>{
    res.send("companies");
});

 

module.exports=router;