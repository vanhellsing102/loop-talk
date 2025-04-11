const User = require("../models/user.model.js");

const getUserForSideBar = async(req, res, next) =>{
    try {
        const loggedInUser = req.user.id;
        const allUserWithOutLoggedInUser = await User.find({
            _id: {$ne: loggedInUser}
        }).select("-password");
        res.status(200).send(allUserWithOutLoggedInUser);
    } catch (error) {
        next(error);
    }
}

module.exports = getUserForSideBar;