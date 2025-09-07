const express = require('express')

const router = express.Router()

// import controller 

const {dummyLink,likePost} = require('../controller/likeController')

const {createComment} = require('../controller/commentController')

const {createPost,getAllPosts} = require('../controller/postController')

// mapping create 
router.get('/dummyroute',dummyLink);
router.post('comments/create' ,createComment);
router.post('/posts/create', createPost);
router.get('/posts',getAllPosts);
router.post('/likes/like', likePost);
module.exports = router;

// export