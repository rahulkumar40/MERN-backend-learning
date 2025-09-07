const User = require('../models/userModel')
const bcrypt = require('bcrypt')
exports.singup = async(req,res)=>{
    try{
        //get data
        const {name, role, email,password} = req.body;

        // cheack user is existing already or not 
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist",
            })
        }

        let hashdPassword;
        try{
            hashdPassword = await bcrypt.hash(password,10);
        }catch(err){
            console.log("err ... at hashing")
            return res.status(500)
            .json({
                success:false,
                message:"Error in hashing password"
            })
        }

        const createUser = await User.create({
            name, email, password:hashdPassword, role
        })

        return res.status(200).json({
            succuss:true,
            message:"User created successfully.."
        })

    }
    catch(err){
        console.log("Error in controller")
        console.log(err)
        res.status(500).json({
            success:false,
            message:"DaUser cannot be registered, plase try agian latter.. ta "
        })
    }
}

exports.login = async(req, res)=>{
    const {user, email} = req.body;

}