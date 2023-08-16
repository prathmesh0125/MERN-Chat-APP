const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api",(req,res)=>{
    res.send("chats data");
})

app.listen(3000, console.log("server started on 3000 port"));
