import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartBar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styling/HomeScreen.css';

const HomeScreen = ({ socket, witelName }) => {
  const [greeting, setGreeting] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.adminName || 'Admin';
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const isLoggedIn = !!location.state?.adminName;

    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting(`Good Morning, ${username}!`);
    } else if (currentHour < 15) {
      setGreeting(`Good Afternoon, ${username}!`);
    } else if (currentHour < 18) {
      setGreeting(`Good Evening, ${username}!`);
    } else {
      setGreeting(`Good Night, ${username}!`);
    }
  }, [username, navigate, location.state]);

  useEffect(() => {
    if (socket) {
      socket.on("getNotification", (data) => {
        setNotifications((prev) => [...prev, data]);
      });
    }
  }, [socket]);

  const displayNotification = () => {
    return (
      <span className="notification"></span>
    );
  };

  const handleNotificationClick = () => {
    alert('Notification button clicked');
  };

  const handleStatisticsClick = () => {
    navigate('/statistics'); // Mengarahkan ke halaman statistik
  };

  const handleGrowthClick = () => {
    alert('Growth button clicked');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="greeting">{greeting}</div>
      <div className="frames-container">
        <button className="frame notification-frame" onClick={handleNotificationClick}>
          <div className="frame-icon">
            <FontAwesomeIcon icon={faBell} />
            {notifications.map((n) => displayNotification(n))}
          </div>
          <p className="frame-number">{notifications.length}</p>
          <p className="frame-text"></p>
        </button>
        <button className="frame statistics-frame" onClick={handleStatisticsClick}>
          <div className="frame-icon">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <p className="frame-number">99+</p>
          <p className="frame-text">Statistics</p>
        </button>
        <button className="frame growth-frame" onClick={handleGrowthClick}>
          <div className="frame-icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <p className="frame-number">75+</p>
          <p className="frame-text">Growth</p>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
