const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats",(req,res)=>{
    res.send(chats);
    // console.log("data");

})
app.get("/api/chat/:id",(req,res)=>{
    // console.log(req.params.id)
    const singelchat=chats.find((c)=>c._id===req.params.id);
    res.send(singelchat)
})

const PORT=process.env.PORT || 5000
app.listen(PORT, console.log(`server started on ${PORT} port`));
