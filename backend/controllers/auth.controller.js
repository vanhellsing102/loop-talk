const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async(req, res) =>{
    const {userName, email, password, confirmPassword, gender} = req.body;
    const validUser = await User.findOne({email});
    if(validUser){
        return res.status(400).send({message: "User already exit"});
    }
    if(password !== confirmPassword){
        return res.status(400).send({message: "Password don't match"});
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
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "500h"});
        res.cookie("token", token, {
            httpOnly: true
        }).status(201).send({
            id: newUser._id,
            userName: newUser.userName,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })
    } catch (error) {
        console.log(`Error is ${error}`);
        res.status(500).send({message: "Internal server error"});
    }
    const result = await newUser.save();
}
const signin = (req, res) =>{

}
const logout = (req, res) =>{

}

module.exports = {
    signup,
    signin,
    logout
}