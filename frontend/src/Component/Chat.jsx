import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chat, setChat] = useState([]);

  const chatsData = async () => {
    const { data } = await axios.get("/api/chats");
    console.log(data);
    setChat(data);
  };

  useEffect(() => {
    chatsData();
  }, []);

  return (
    <div>
      Dashboard djfjsdhkjsd
      {chat.map((chat)=>(
  <div key={chat._id}>
  <p style={{color:"white"}} >{chat.chatName}</p>
  {/* <p>{chat._id}</p> */}
  {/* <p>{chat.grou}</p> */}
   </div>
))}
    </div>
  );
};

export default Chat;
