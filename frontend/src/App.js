// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Input from './pages/Input';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginadmin" element={<Admin />} />
        <Route path="/input" element={<Input />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
