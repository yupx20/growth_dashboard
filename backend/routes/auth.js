// routes/auth.js
const express = require('express');
const router = express.Router();

// Simpan informasi pengguna (gunakan database yang sesuai di lingkungan produksi)
const users = {
    'user1': { 'password': 'password1' },
    'user2': { 'password': 'password2' }
};

router.post('/login', (req, res) => {
    const { nama, password } = req.body;

    if (!nama || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    if (!users[nama] || users[nama].password !== password) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Berhasil login
    res.json({ message: 'Login successful' });
});

module.exports = router;
