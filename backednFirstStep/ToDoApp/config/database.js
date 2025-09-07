// mongo 
const mongoose = require("mongoose");

require("dotenv").config(); // to load data into process object .... 
const dbContect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    })
    .then(()=>console.log("DB ka connection is successful"))
    .catch((error)=>{
        console.log("Issue in db connection")
        console.error(error.message)

        // 
        process.exit(1)
    })
}

module.exports = dbContect;
// how process read env into database url ---> require 4 number line load data into process object 