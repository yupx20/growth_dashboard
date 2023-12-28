// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Daftar from './pages/Daftar';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;