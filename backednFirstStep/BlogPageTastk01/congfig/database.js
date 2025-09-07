
// connecting mongoo db to the server...

const mongoose = require('mongoose')

require('dotenv').config();
const dbPort = process.env.DATABASE_PORT;

const dbConnect = ()=>{
    mongoose.connect(dbPort, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=>{console.log("DataBase connection successfully...")})
    .catch( (err)=>{
        console.log("Issue in DataBase Connection...")
        console.error(err.message)
        process.exit(1);
    });
}
module.exports = dbConnect;