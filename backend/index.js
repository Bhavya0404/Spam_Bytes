const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
require('./routes/posts.js');


const app=express();
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

const PORT = process.env.PORT || 3000;
const MONGO_URL = 'mongodb+srv://MeenalPrakash:meenal2003@cluster0.wwhtx.mongodb.net/ProjectPayRoll?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL, () => {
    console.log("Database Connected");
    app.listen(PORT, () => {
        console.log("server is running at port 3000");
    })
})


