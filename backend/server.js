// backend/server.js

// ... (previous code)

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }
  
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    pool.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      if (results.length > 0) {
        return res.json({ message: 'Login successful!' });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  });
  
  // ... (remaining code)
  