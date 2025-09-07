const blog = require('../models/blogPage');


exports.createBlog = async (req, res)=>{
    const {title, description, blogLike, blogDisLike,comment} = req.body;

    const reaponse = await blog.create({
        title, description, blogLike, blogDisLike,comment
    })

    res.status(200).json({
        success:true,
        data:reaponse,
        message:'Data entry created'
    })
}