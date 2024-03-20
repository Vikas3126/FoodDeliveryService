const express=require("express");
const userController=require("../Controller/userController")

const userRouter=express.Router();

userRouter.post("/register",userController.registerUser);
userRouter.post("/login",userController.loginUser);
userRouter.put("/:id/reset",userController.resetPassword);

module.exports={
    userRouter
}