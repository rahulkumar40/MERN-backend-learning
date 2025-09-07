const express = require("express")
const router = express.Router();

const {localFile,imageUpload,videoUpload,imageSizeReducer} = require('../controllers/fileUp');

// api route 
// router.post('/imageUpload', imageUpload);
router.post("/ll", localFile)
router.post("/imageUpload",imageUpload)
router.post("/videoUpload",videoUpload)
router.post("/imageSizeReducer",imageSizeReducer)

module.exports = router;

