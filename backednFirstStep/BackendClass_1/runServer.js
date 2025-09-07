const express= require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("Server is hosted at 3000 port no...")
})

app.get( "/", (req, res)=>{
    res.send(`<h1>First Code ....</h1>`)
})