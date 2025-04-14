const express = require("express");
const verifyToken = require("../middlewares/verify.js");
const getUserForSideBar = require("../controllers/user.controller.js");
const router = express.Router();

router.get('/:id', getUserForSideBar);

module.exports = router;