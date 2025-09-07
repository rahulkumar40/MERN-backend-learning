const mongoose = require("mongoose");

require('dotenv').config()

const connect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=>{console.log("Connection successfully done")})
    .catch( (err)=>{
        console.log("Error occur.." + err)
    })
}
module.exports = connect;