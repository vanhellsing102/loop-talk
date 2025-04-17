import User from "../models/user.model.js";

const getUserForSideBar = async(req, res, next) =>{
    try {
        // const loggedInUser = req.params.id;
        const loggedInUser = req.user.id;
        // console.log(loggedInUser);
        const allUserWithOutLoggedInUser = await User.find({
            _id: {$ne: loggedInUser}
        }).select("-password");
        res.status(200).send(allUserWithOutLoggedInUser);
    } catch (error) {
        next(error);
    }
}

export default getUserForSideBar;