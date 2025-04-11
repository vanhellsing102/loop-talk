const express = require("express");
const { sendMessage, getMessage } = require("../controllers/message.controller.js");
const verifyToken = require("../middlewares/verify.js");
const router = express.Router();

router.post('/send/:id', verifyToken, sendMessage);
router.get('/get/:id', verifyToken, getMessage);

module.exports = router;