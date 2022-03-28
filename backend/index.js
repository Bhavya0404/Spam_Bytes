const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser'); 
const cors = require('cors');
require('./routes/posts.js');

const app=express();


require('./db/conn');

//app.use(bodyParser.json({limit:"30mb", extended: true }));
//app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
//app.use(cors(


    const middleware = (req,res,next) => {
        console.log("this is my middleware");
        next();
    }
    
    
    app.use(middleware);
    app.use(express.json());
    

    app.get('/' , (req, res)=> {
        res.send("this works");
    });
    app.get('/about',middleware, (req,res)=>{
        res.send("about page");
  });


app.listen(27017, () => {
    console.log("server is running at port 5000");
})


const PORT = process.env.PORT || 27017;




