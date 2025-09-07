// auth, isStudent, isAdmin 
const jwt = require("jsonwebtoken")
require('dotenv').config()

const cookieParser = require('cookie-parser');
exports.auth = (req, res , next)=>{
    try{
        // extract jwt token 
        // PENDING : other way to fetch token 

        console.log("cookie", req.cookies.Token)
        console.log("body", req.body.token)
        console.log("header", ) //req.header("Authorization").replace("Bearer", "")
        // console.log("cookie ", req.cookie.token)
        // console.log("body", req.body.token);
        // prerequizit cookies-parse imported 
        const token = req.body.token || req.cookies.Token ; 

        if(!token){
            return res.status(401).json({
                success:false,
                message:"token missing.."
            })
        }

        // varify te token 
        try{
            const payload = jwt.verify(token, process.env.JWT_SCRET)
            console.log(payload);
            req.user = payload;
        }
        catch(err){
            console.log(err)
            return res.status(401).json({
                success:false,
                message:"token is invalid "
            })
        }
        next();

    }
    catch(err){
        console.log(err)
        return res.status(401).json({
            success:false,
            message:"Some went wrong while varifying token.."
        })
    }
}

exports.isStudent = (req, res,next)=>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false, 
                message:"this is protected route for students",
            })
        }
        next()
    }
    catch(err){
        return res.status(501).json({
            success:false,
            message:"User role cannot matching..."
        })
    }
}

exports.isAdmin = (req, res, next)=>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false, 
                message:"This is protected route for Admin",
            });
        };
        next();
    }
    catch(err){
        return res.status(501).json({
            success:false,
            message:"User role cannot matching..."
        })
    }
}