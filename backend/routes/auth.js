const express = require('express');
const router = express.Router();
const Witel = require('../models/Witel');
const Admin = require('../models/Admin');

// User login route
router.post('/login', async (req, res) => {
  const { nama, password } = req.body;

  if (!nama || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const user = await Witel.findOne({ where: { nama } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Successful login
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin login route
router.post('/admin/login', async (req, res) => {
  const { nip, password } = req.body;

  if (!nip || !password) {
    return res.status(400).json({ error: 'NIP and password are required' });
  }

  try {
    const admin = await Admin.findOne({ where: { nip } });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: 'Invalid admin NIP or password' });
    }

    // Successful login
    res.json({ message: 'Admin login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
