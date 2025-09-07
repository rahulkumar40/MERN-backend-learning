

const express = require('express')
const app = express();

app.listen(4000, ()=>{
    console.log("Server Started at 4000 port no...");
})

app.get('/', (request, response)=>{
    response.send("Hello Jeee, I am running now...");
})

