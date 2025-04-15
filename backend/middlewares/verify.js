const { errorHandler } = require("../utils/error.js");
const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) =>{
    try {
        const token = req.cookies.token;
        console.log(token);
        if(!token){
            return next(errorHandler(401, "Unauthorized"))
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
            if(err){
                return next(errorHandler(403, "Forbidden"));
            }
            req.user = decoded;
            next();
        })
    } catch (error) {
        next(error);
    } 
}

module.exports = verifyToken;