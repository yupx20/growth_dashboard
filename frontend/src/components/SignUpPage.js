// SignUpPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styling/SignUpPage.css';

function SignUpPage() {
  const navigate = useNavigate();

  // State to manage input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign-up
  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., send data to server)
    // For simplicity, just navigate to the home page if username and password are not empty
    if (username && password) {
      navigate('/');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <p className="login-message">
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
}

export default SignUpPage;
