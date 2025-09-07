console.log("Hii");

const express = require("express")
require("dotenv").config()
const app = express();
app.use(express.json());
const database = require('./config/database')
database();

const cors = require("cors");
const user = require("./router/signin");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api", user)
const PORT = process.env.PORT_NO || 5000;
app.listen(PORT , (req, res)=>{
    console.log("Server run at "+PORT)
})