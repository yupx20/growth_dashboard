import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();

    const [nama, setNama] = useState(''); 
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/rent/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nama, password }),
            });

            const data = await response.json();

            if (data.status) {
                navigate('/home');
            } else {
                console.error('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    const handleSignUp = () => {

        navigate('/signup');
    };

    return (
      <div className="login-page">
          <div className="login-container">
              <h2>Login</h2>
              <form>
                  <div className="form-group">
                      <label htmlFor="nama">Username:</label>
                      <input
                          type="text"
                          id="nama"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <button type="button" className="login-btn" onClick={handleLogin}>
                      Login
                  </button>
              </form>
              <p className="signup-message">
                  Don't have an account? <span className="signup-link" onClick={handleSignUp}>Sign up</span>
              </p>
          </div>
      </div>
  );
}

export default LoginPage;