const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const User = require('../models/user');

// Admin Login
router.post('/admin/login', async (req, res) => {
    const { adminName, adminPassword } = req.body;
    try {
        const admin = await Admin.findOne({ where: { adminName } });
        if (!admin) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' });
        }

        const isMatch = await admin.comparePassword(adminPassword);
        if (!isMatch) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ status: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Server error' });
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { nama, password } = req.body;
    try {
        const user = await User.findOne({ where: { nama } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
