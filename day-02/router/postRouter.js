const {createTodo} = require('../controller/createController');

const express = require('express')
const router = express.Router();

router.post('/createTodo', createTodo);

module.exports = router;