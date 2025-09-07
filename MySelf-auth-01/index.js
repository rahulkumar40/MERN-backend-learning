const express = require("express")

const app = express();
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT;

const dbConnection = require('./config/database')
dbConnection()


const router = require('./router/user')

app.use("/api/v2", router);


app.listen(port , ()=>{
    console.log("App running at "+port);
})