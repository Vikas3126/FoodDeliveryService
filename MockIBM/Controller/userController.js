
const bcrypt=require("bcrypt");

const {UserModel}=require("../model/userModel");
const jwt=require("jsonwebtoken");


exports.registerUser=(req,res)=>{
    const {name,email,password,address}=req.body;
    
    try {
        bcrypt.hash(password,8,async(err,hash)=>{

            if(err){
                res.status(200).json({error:err});
            }
            else{

                const user=new UserModel({name,email,password:hash,address});
                await user.save();
                res.status(200).json({mesg:"The new user has been registered"});
            }
        })

    } catch (error) {
        
        res.status(500).json({mesg:error});
    }
}

exports.loginUser=async(req,res)=>{
    const {email,password}=req.body;

    try {
        const user=await UserModel.findOne({email});
        bcrypt.compare(password,user.password,(err,result)=>{

            if(result){
                const token=jwt.sign({usreID:user._id,user:user.name},process.env.secretKey);
                res.status(200).json({mesg:"Login Sucessfull"});
            }
            else{
                res.status(200).json({mesg:err});
            }

        })
    } catch (error) {
        res.status(500).json({mesg:error});
    }
}

exports.resetPassword=async(req,res)=>{

    try {
        const hashedPassword=await bcrypt.hash(req.body.password,10);

        await UserModel.findByIdAndUpdate(req.params.id,{password:hashedPassword});
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"Error reseting password"});
    }
}