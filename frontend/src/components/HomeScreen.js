import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styling/HomeScreen.css';

const HomeScreen = () => {
    const [greeting, setGreeting] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.adminName || 'Admin';

    useEffect(() => {
        // Logika untuk memeriksa apakah pengguna sudah login
        const isLoggedIn = !!location.state?.adminName; // Misalnya menggunakan state dari react-router

        if (!isLoggedIn) {
            navigate('/'); // Arahkan ke path login jika belum login
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

    return (
        <div className="home-container">
            <Navbar />
            <div className="greeting">{greeting}</div>
        </div>
    );
};

export default HomeScreen;
