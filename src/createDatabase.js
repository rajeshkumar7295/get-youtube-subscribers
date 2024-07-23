const mongoose = require('mongoose')
require("dotenv").config();

// Connect to DATABASE
const connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("DB is connected")
    }).catch((err)=>{
        console.log("db not connected");
        console.log(err);
        console.error(err);
        process.exit(1);
    })
}

module.exports=connect;