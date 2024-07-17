// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Daftar from './pages/Daftar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Detail from './pages/Detail';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/loginadmin" element={<Admin />} />
<<<<<<< HEAD
        <Route path="/dashboard" element={<Dashboard/>} />
=======
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> 1331def7a890f9a649cae95b4b7ad6e83a89f6c0
      </Routes>
    </Router>
  );
}

export default App;