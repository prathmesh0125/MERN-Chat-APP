const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const genrateToken = require("../config/genrateToken.js");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, profileimg } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please Enter all the details");
  }

  const userAllreadyExit = await User.findOne({ email });

  if (userAllreadyExit) {
    res.status(400);
    throw new Error("You are already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    profileimg,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileimg: user.profileimg,
      token: genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

const authuser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileimg: user.profileimg,
      token: genrateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Please Enter correct email or password");
  }
});

// query request=http://localhost:5000/api/user?search=prathmesh&lastname=Bidve
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({
    _id: { $ne: req.user._id },
  });
  res.send(users);
  // $regex ,$ne it is mongodb operator
  // $options:"i" it is option for case insencitive user can search name capital or small
  // console.log(keyword);
});
module.exports = { registerUser, authuser, allUsers };
