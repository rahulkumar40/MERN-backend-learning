const mongoose = require('mongoose');


require('dotenv').config();
const dbPort = process.env.DATABASE_URL;
const dbConnect = ()=>{
    mongoose.connect(dbPort).then(()=>{console.log("Connection done ..")})
    .catch((error)=>{
        console.log("Db facing connection issue")
        console.log(error)
        process.exit(1)
    })

}

module.exports = dbConnect;