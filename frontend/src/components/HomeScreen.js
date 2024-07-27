import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styling/HomeScreen.css';

const HomeScreen = () => {
    const [greeting, setGreeting] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.adminName || 'Admin';

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

    const handleNotificationClick = () => {
        // Tambahkan logika untuk aksi saat tombol notifikasi diklik
        alert('Notification button clicked');
    };

    const handleStatisticsClick = () => {
        // Tambahkan logika untuk aksi saat tombol statistik diklik
        alert('Statistics button clicked');
    };

    return (
        <div className="home-container">
            <Navbar />
            <div className="greeting">{greeting}</div>
            <div className="frames-container">
                <button className="frame notification-frame" onClick={handleNotificationClick}>
                    <div className="frame-icon">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <p className="frame-number">99+</p>
                    <p className="frame-text">Waiting for approval</p>
                </button>
                <button className="frame statistics-frame" onClick={handleStatisticsClick}>
                    <div className="frame-icon">
                        <FontAwesomeIcon icon={faChartBar} />
                    </div>
                    <p className="frame-number">99+</p>
                    <p className="frame-text">Statistics</p>
                </button>
            </div>
        </div>
    );
};

export default HomeScreen;
