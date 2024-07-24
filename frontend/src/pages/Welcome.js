import React from 'react';
import Sidebar from "../components/Navbar";
import HomeScreen from '../components/HomeScreen';

const Navbar = () => {
  return (
    <div>
        <HomeScreen />
      <Sidebar />
    </div>
  );
};

export default Navbar;
