const bcrypt = require('bcrypt')
const User = require('../models/user')

// signup route handler
exports.singup = async(req, res)=>{
    try{
        // get data 
        const {name, email, password, role} = req.body;

        // check if user already exst 
        const existingUser = await User.findOne(email);

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }


        // secure password 

        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashin password"
            })
        }
        // create entry fo user 
        const user = await User.create({
            name, email, password:hashedPassword, role
        })

        res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    }
    catch( err){
        console.log("Error ocuure")
        return res.status(500).json({
            success:false,
            message:"user cannot be registered, please try again latter.."
        })
    }
}