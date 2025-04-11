const express = require("express");
const { sendMessage } = require("../controllers/message.controller.js");
const verifyToken = require("../middlewares/verify.js");
const router = express.Router();

router.post('/send/:id', verifyToken, sendMessage);

module.exports = router;