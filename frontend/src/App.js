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
import Order from './pages/Order';
import Direct from './pages/Direct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/direct" element={<Direct />} />
      </Routes>
    </Router>
  );
}

export default App;
