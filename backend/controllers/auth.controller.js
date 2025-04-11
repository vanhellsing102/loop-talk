const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../utils/error.js");

const signup = async(req, res, next) =>{
    const {userName, email, password, confirmPassword, gender} = req.body;
    // console.log(email)
    const validUser = await User.findOne({email: email});
    if(validUser){
        return next(errorHandler(400, "User already exit"));
        // return res.status(400).send({message: "exit"})
    }
    if(password !== confirmPassword){
        return next(errorHandler(400, "Password don't match"));
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const newUser = new User({
        userName,
        email,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })
    try {
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "50h"});
        res.cookie("token", token, {
            httpOnly: true
        }).status(201).send({
            id: newUser._id,
            userName: newUser.userName,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })
    } catch (error) {
        next(error);
    }
    const result = await newUser.save();
}

const signin = async(req, res, next) =>{
 try {
    const {email, password} = req.body;
    const validUser = await User.findOne({email: email});
    if(!validUser){
        return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if(!validPassword){
        return next(errorHandler(401, "Wrong creadentials"));
    }
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET, {expiresIn: "50h"});
    res.cookie("token", token, {
        httpOnly: true
    }).status(200).send({
        id: validUser._id,
        userName: validUser.userName,
        gender: validUser.gender,
        profilePic: validUser.profilePic
    })
 } catch (error) {
    next(error)
 }
}
const logout = (req, res) =>{

}

module.exports = {
    signup,
    signin,
    logout
}