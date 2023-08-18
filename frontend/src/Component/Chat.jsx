import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chat, setChat] = useState([]);

  const chatsData = async () => {
    const { data } = await axios.get("/api/chats");
    setChat(data);
  };

  useEffect(() => {
    chatsData();
  }, []);

  return <div>Dashboard


{chat.map((chat)=>(
  <div key={chat._id}>
  <p>{chat.chatName}</p>
  <p>{chat._id}</p>
  {/* <p>{chat.grou}</p> */}
   </div>
))}

  </div>;
};

export default Chat;
