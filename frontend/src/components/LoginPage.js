  // LoginPage.js
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import '../styling/LoginPage.css';

  function LoginPage() {
    const navigate = useNavigate();

    // State to manage input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle login
    const handleLogin = () => {
      // Perform authentication logic here (e.g., check credentials)
      // For simplicity, just navigate to the home page if username and password are not empty
      if (username && password) {
        navigate('/');
      }
    };

    const handleSignUp = () => {
      // Navigate to the sign-up page
      navigate('/signup');
    };

    return (
      <div className="login-container">
        <h2>Login</h2>
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p className="signup-message">
          Don't have an account? <span className="signup-link" onClick={handleSignUp}>Sign up</span>
        </p>
      </div>
    );
  }

  export default LoginPage;
