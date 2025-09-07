const mongoose = require("mongoose")

require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const connect = ()=>{
    mongoose.connect(DATABASE_URL)
    .then(()=>{console.log("Database Connection succefully..")})
    .catch((err)=>{console.log(err + "err in database file")})
}

 module.exports = connect;