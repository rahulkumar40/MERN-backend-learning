const express = require('express')
const app = express();

require('dotenv').config();
const port = process.env.PORT || 6000 ;


// middleware to json request body

app.use(express.json());

const todoRoutes = require('./router/todo')
app.use('/api/v1', todoRoutes)

app.listen(port, ()=>{
    console.log("Kya ji aa gye "+port);
})

const dbConnect = require('./congfig/database');
dbConnect();


app.get('/', (req, res)=>{
    res.send(`<h1>hi, This is Rahul Kumar ToDo Practice </h1>`)
})