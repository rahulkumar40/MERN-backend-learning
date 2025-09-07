// import model 
const Comment = require('../models/commentModels')
const Post = require('../models/postModels')


//business logic 
exports.createComment = async(req, res)=>{
    try{
        // fetch data from req body..
        const {body,post,user} = req.body;
        //create a comment object 
        const comment = new Comment({
            post,user,body
        })

        // save the new comment into the database 

        const saveComment = await comment.save();

        // find the post by Id, add the new comment to its omments array...
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}}, {new:true})
        .populate("comment")// populate the comments array with comment documents.
        .exec();

        res.json({
            post:updatePost
        })

    }
    catch(err){
        // console.log(err)
        return res.status(500).json({
            error:err.message
        })
    }
}