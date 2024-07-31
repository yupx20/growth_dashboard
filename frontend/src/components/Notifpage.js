// Notif.js
import React, { useContext, useEffect } from "react";
import "../styling/notif.css";
import Navbar from "./Navbar";

const Notif = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="notif">
        <div className="contener">
          <div>
            <div className="status-ind"></div>
          </div>
          <div className="right">
            <div className="text-wrap">
              <p className="text-content">{notification}</p>
              <p className="time"></p>
            </div>
            <div className="button-wrap">
              <button className="primary-cta">View file</button>
              <button className="secondary-cta" onClick={handleRead}>Mark as read</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notif;
