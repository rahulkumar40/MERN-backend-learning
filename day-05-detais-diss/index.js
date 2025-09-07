

const express = require('express');

const app = express();

// middleware 
app.use(express.json())

// router 
app.get('/', (req,res)=>{
    res.send(`<h1>This is heading of get router</h1>`)
})

app.post('/cars', (req, res)=>{
    res.send("Receice a post request.")
})
const port = 3000 ;

app.listen(port, ()=>{
    console.log("Kya ji aaa gye port no "+port)
})
