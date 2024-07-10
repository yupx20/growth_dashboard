import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();

    const [nama, setNama] = useState(''); 
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {  // Updated endpoint URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nama, password }),
            });

            const data = await response.json();

            if (data.message === 'Login successful') {  // Adjust the condition to match the backend response
                const token = data.token;
                const { role } = JSON.parse(atob(token.split('.')[1]));

                if (role === 'user') {
                    navigate('/userhome');
                } else if (role === 'admin') {
                    navigate('/adminhome');
                }
            } else {
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    const handleLoginAsAdmin = () => {
        navigate('/loginadmin');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2></h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nama">Username</label>
                        <input
                            type="text"
                            id="nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
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
                    Don't have an account? <span className="signup-link" onClick={handleLoginAsAdmin}>Login as Admin</span>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
