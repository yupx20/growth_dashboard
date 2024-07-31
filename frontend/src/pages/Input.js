import React, { useEffect, useState } from "react";
import InputUser from "../components/InputUser";
import { io } from "socket.io-client";

const Input = () => {
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);
  return (
    <div>
      <InputUser socket={socket}/>
    </div>
  );
};

export default Input;