// const express = require('express');

// // require function to import krna hai

// const app = express();
// app.listen(3000, ()=>{
//     console.log("App is running successfully..")
// })



const express = require("express")

const app = express()
// ;pad

require("dotenv").config();
const PORT = process.env.PORT || 3015

// middleware to parse jsonresponse body
app.use(express.json());


// import routes for Todo api 

const todoRoutes = require("./routes/todos")

// mount the to todo  aspi routes 

app.use("/api/v1",todoRoutes);

// server start 

app.listen(PORT, ()=>{
    console.log("Server started sucessfull at "+PORT);
})

// connection to the db 
const dbConnect = require("./config/database")
dbConnect();
// default route 

app.get("/", (req, res)=>{
    res.send(`<h1> Server is running babay</h1>`)
})