const express = require("express")

const router = express.Router()


// import controller
const {createTodo} = require("..//controller/createTodo")

// defince api route
router.post("/createTodo",createTodo);

module.exports = router;