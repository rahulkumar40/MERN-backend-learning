const express = require('express')

// import models 
const Post = require('../models/postModels')
const Like = require('../models/likeModels')

// like a post 

exports.likePost = async(req, res)=>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,user,
        })

        const saveLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{like:saveLike._id}}, {new:true}).populate("like").exec();
        res.json({
            post:updatedPost
        })
    }
    catch(err){
        console.log("Data error"+err)
        res.status(400).json({
            error:err.message
        })
    }
}

exports.unlikePost = async(req, res)=>{
    try{
        const {like, post} = req.body;

        // find and delete the like collection me se 
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like})

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{like:deleteLike._id} },{new:true});

        res.json({
            post:updatedPost
        });
    }
    catch(err){
        console.log("Data error"+err)
        res.status(400).json({
            error:err.message
        })
    }
    
}





exports.dummyLink = (req,res)=>{
    res.send("This is your dummy page")
}