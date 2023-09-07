const express = require("express");

const { registerUser, authuser } = require("../Controlers/usercontrol");
const router = express.Router();

router.route("/").post(registerUser);

// router.route("/login", authuser);
router.post("/login", authuser);

module.exports = router;
