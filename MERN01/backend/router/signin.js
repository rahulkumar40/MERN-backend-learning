const express = require("express");
const router = express.Router();

const {singUp}  = require("../controller/auth");

router.post("/signUp", singUp);

module.exports = router;