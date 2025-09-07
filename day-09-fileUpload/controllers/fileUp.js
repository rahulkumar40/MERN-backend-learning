const File = require('../models/file');
const express = require('express');
const cloudinary = require('cloudinary').v2;// creating intance 
console.log("ji me hi")
exports.localFile = async(req,res)=>{
    console.log("Hii kijj ")
    try{
        // const {name, email,imageUrl,tags } = req.body;
        // file fetch filefrom request 
        const file = req.files.file;
        console.log("File AAGYI JEE --> ",file);

        // create path where file neeed to be stored on server 

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path ---> "+path);
        // add path to move function 
        file.mv(path, (err)=>{
            console.log(err);
        });
        // create a successfully response .... 
        res.json({
            success:true,
            message:"local file uploaded successfully."
        })
        
        // if(!email || !name|| !tags || !imageUrl){
        //   return  res.status(400).json({
        //         success:false,
        //         message:"all element are required..."
        //     })
        // }
        // const user = await File.create({
        //     name,email,imageUrl,tags
        // })

        // res.status(200).json({
        //     success:true,
        //     user,
        //     message:"I am user, email id and imageUrl.."
        // })
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

// image upload ka handler 

function isFileTypeSupported(type,supportedType){
    return supportedType.includes(type);
}


// imageUpload 

async function uploadFileToCloudinary(file,folder,quality){

    const options = {folder};
    options.resource_type="auto";
    if(quality){
        options.quality=quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}
exports.imageUpload = async(req, res)=>{
    try{
        //data fetch
        const {name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);
        
        // validation 
        const supportedType = ["jpg","jpeg","png"];

        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File type ---> "+ fileType)


        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(500).json({
                success:false,
                message:"file format not supported"
            })
        }

        // file format supported 
        // upload cloudinary...

        const response = await uploadFileToCloudinary(file,"CodeHelp");
        console.log(response)
        // db me entry save krni hai
        const fileData = await File.create({
            name, tags, email, imageUrl:response.secure_url
        })

        res.status(201).json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded..."
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"SomeTing went wrong.."
        })
    }
}

// video upload ka handler 

exports.videoUpload = async(req,res)=>{
    try{
        // data fetch 
        const {name, tags, email} = req.body;
        
        console.log(name, tags, email);
        const file = req.files.videoFile;
        // validation 
        const supportedType = ["mp4","mov"];

        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File type ---> "+ fileType)
        const response = await uploadFileToCloudinary(file,"CodeHelp",30);
        console.log(response)

// add a uper limit of 5mb for video     
        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(500).json({
                success:false,
                message:"file format not supported"
            })
        }

        res.status(201).json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded..."
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Something went wrong...."
        })
    }
}

//  imageSizeReducer
exports.imageSizeReducer = async(req,res)=>{
    try{
        const {name, tags, email} = req.body;
        
        console.log(name, tags, email);
        const file = req.files.imageFile;
        // validation 
        const supportedType = ["mp4","mov"];

        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File type ---> "+ fileType)
        const response = await uploadFileToCloudinary(file,"CodeHelp");
        console.log(response)

        // add a uper limit of 5mb for video     
        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(500).json({
                success:false,
                message:"file format not supported"
            })
        }
        


        res.status(201).json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded..."
        })
    }
    catch(err){

    }
}