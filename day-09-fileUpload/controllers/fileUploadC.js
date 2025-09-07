const File = require('../models/file');
console.log("ji me hi")
exports.localFile = async(req,res)=>{
    console.log("Hii kijj ")
    try{
        const {name, email,imageUrl,tags } = req.body;
        // const file = req.req.files.file;
        console.log("Hi kya hai ji")
        
        if(!email || !name|| !tags || !imageUrl){
          return  res.status(400).json({
                success:false,
                message:"all element are required..."
            })
        }
        const user = await File.create({
            name,email,imageUrl,tags
        })

        res.status(200).json({
            success:true,
            user,
            message:"I am user, email id and imageUrl.."
        })
    }
    catch(err){
        console.log("Error at local file upload..");
        console.log(err)
        res.status(401).json({
            success:false,
            message:"Error in local file upload.."
        })
    }
}

module.exports = localFile;