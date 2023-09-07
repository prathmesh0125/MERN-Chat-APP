const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");
const { notFound, errorHandler } = require("./middelware/errormiddelware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); //to access json data
app.get("/", (req, res) => {
  res.send("API is running on 5000 port");
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/api/chats", (req, res) => {
  res.send(chats);
  console.log("data");
});
app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singelchat = chats.find((c) => c._id === req.params.id);
  res.send(singelchat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on ${PORT} port`.blue.bold));
