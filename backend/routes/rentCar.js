const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require('../config/database');



router.post('/signup', [
    body('nama').notEmpty(),
    body('password').notEmpty(),
], async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: 'Invalid input data',
            errors: errors.array(),
        });
    }

    const { nama, password } = req.body;

    // Check if the username (nama) is already taken
    const userExistsQuery = 'SELECT * FROM users WHERE nama = ?';
    connection.query(userExistsQuery, [nama], function (err, rows) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        }
        if (rows.length > 0) {
            return res.status(409).json({
                status: false,
                message: 'Username already exists',
            });
        }

        // Insert the new user into the database
        const insertUserQuery = 'INSERT INTO users (nama, password) VALUES (?, ?)';
        connection.query(insertUserQuery, [nama, password], function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: false,
                    message: 'Internal Server Error',
                });
            }

            const userId = result.insertId;
            return res.status(201).json({
                status: true,
                message: 'Sign-up successful',
                user: {
                    id: userId,
                    nama: nama,
                },
            });
        });
    });
});

router.post('/login', [
    body('nama').notEmpty(), // Change 'email' to 'nama' for consistency with the frontend
    body('password').notEmpty(),
    ], async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: 'Invalid input data',
            errors: errors.array(),
        });
    }

    const { nama, password } = req.body;

    const userQuery = 'SELECT * FROM users WHERE nama = ?';
    connection.query(userQuery, [nama], function (err, rows) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        }
        if (rows.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'User not found',
            });
        }
        const user = rows[0];
        const userId = user.id;

        if (password !== user.password) {
            return res.status(401).json({
                status: false,
                message: 'Invalid password',
            });
        }

        return res.status(200).json({
            status: true,
            message: 'Login successful',
            user: {
                id: userId,
                nama: user.nama, // Include other user details if needed
            },
        });
    });
});

module.exports = router;
