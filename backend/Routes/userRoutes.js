const express = require("express");

const { registerUser, authuser, allUsers } = require("../Controlers/usercontrol");
const { protect } = require("../middelware/authmidelware");
const router = express.Router();

router.route("/").post(registerUser).get(protect,allUsers);

// router.route("/login", authuser);
router.post("/login", authuser);

module.exports = router;
