import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000", // Adjust this if your client is hosted elsewhere
  },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  if (!onlineUsers.some((user) => user.username === username)) {
    onlineUsers.push({ username, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
    console.log(`User added: ${username}`);
  });

  socket.on("sendNotification", (Submit) => {
    console.log('Data Added' + Submit);
    io.emit("getNotification", Submit);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    removeUser(socket.id);
  });
});

io.listen(5000);
