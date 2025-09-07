// const express = require('express')
// const app = express();

// app.listen(4000,()=>{
//     console.log("App is run at 3000 port...")
// })


const express = require('express')

const app = express();


// load config from env 

require('dotenv').config();

const PORT = process.env.PORT || 6000;
// 
// middleware to parse json request body
app.use(express.json());

// import route for todo api

const todoRoutes = require('./routes/todo');

// mounting the todo api routes...
app.use("/api/v1",  todoRoutes)




app.listen(9000, ()=>{
    console.log("Server started sucfessfully at "   );
})

// connecting to db 
const dbConnect = require('./config/database');
dbConnect();
// default route 

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page</h1>`);
})