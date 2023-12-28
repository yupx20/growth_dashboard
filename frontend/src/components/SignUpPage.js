// SignUpPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styling/SignUpPage.css';

function SignUpPage() {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/rent/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, password }),
      });

      const data = await response.json();

      if (data.status) {
        // Sign-up successful, navigate to home page or perform other actions
        navigate('/');
      } else {
        // Handle sign-up failure
        console.error('Sign-up failed:', data.message);
      }
    } catch (error) {
      console.error('Error during sign-up:', error.message);
    }
  };
  return (
    <div className='signup-page'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group-signup">
            <label htmlFor="nama">Username:</label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signup-btn" type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <p className="login-message">
          Already have an account? <Link to="/" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
