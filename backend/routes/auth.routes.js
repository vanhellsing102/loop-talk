const express = require("express");
const { logout, signin, signup } = require("../controllers/auth.controller.js");
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);

module.exports = router;