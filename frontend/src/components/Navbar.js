import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/SideBar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const adminName = location.state?.adminName;

    const handleLogout = () => {
        localStorage.removeItem('adminName');
        navigate('/');
    };

    useEffect(() => {
        const isLoggedIn = !!adminName;
    
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [navigate, adminName]);

    return (
        <div className="navbar">
            <div className="logo"></div>
            <ul>
                <li>
                    <button onClick={() => navigate('/home', { state: { adminName } })}>Home</button>
                </li>
                <li>
                    <button onClick={() => navigate('/dashboard', { state: { adminName } })}>Dashboard</button>
                </li>
                <li>
                    <button onClick={() => navigate('/profile', { state: { adminName } })}>Profil</button>
                </li>
            </ul>
            <ul className="logout">
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
