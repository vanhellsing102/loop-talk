import express from "express";
import verifyToken from "../middlewares/verify.js";
import getUserForSideBar from "../controllers/user.controller.js";
const router = express.Router();

router.get('/', verifyToken, getUserForSideBar);

export default router;