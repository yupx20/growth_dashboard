import { useEffect, useState } from "react";
import HomeScreen from '../components/HomeScreen';
import { io } from "socket.io-client";
const Home = () => {
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
      <HomeScreen socket={socket} />
    </div>
  );
};

export default Home;