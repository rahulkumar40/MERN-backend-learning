const mongoose = require('mongoose')

require('dotenv').config();

const dataBaseURl = process.env.DATABASE_URL;

const   dbConnect = ()=>{ mongoose.connect(dataBaseURl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then( ()=>console.log("Connection successfully.."))
.catch( (error)=>{
    console.log("error occurred.."+error);
    process.exit(1);
})
}
module.exports = dbConnect;