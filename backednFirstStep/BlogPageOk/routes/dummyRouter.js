const express = require('express')
const router = express.Router()

const {dummyLike} = require('../controller/Likecontroller');

router.get('/dummyroute', dummyLike)

module.exports = router;