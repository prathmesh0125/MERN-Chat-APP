const express = require("express");
const { accessChat, fetchchat, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require("../Controlers/Chatcontroler");
const { protect } = require("../middelware/authmidelware");

const router =express.Router();
router.route("/").post(protect,accessChat);
router.route("/").get(protect,fetchchat);
router.route("/group").post(protect,createGroupChat);
router.route("/rename").put(protect,renameGroup);
router.route("/GroupRemove").put(protect,removeFromGroup);
router.route("/GroupAdd").put(protect,addToGroup);

module.exports=router;
  