import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Sidebar.css'; // Pastikan nama file CSS sesuai

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"></div>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/profil">Profil</Link>
                </li>
            </ul>
            <ul className="logout">
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
