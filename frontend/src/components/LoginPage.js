// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ witel: nama, password: password }),
            });

            const data = await response.json();

            if (data.status) {
                setSuccessMessage(data.message);
                setErrorMessage('');
                localStorage.setItem('user', nama);
                alert(`Welcome Witel ${nama}!`);
                navigate('/home');
            } else {
                setErrorMessage(data.message);
                setSuccessMessage('');
                console.error('User login failed:', data.message);
            }
        } catch (error) {
            setErrorMessage('Error during User login');
            console.error('Error during User login:', error.message);
        }
    };

    const handleLoginAsAdmin = () => {
        navigate('/loginadmin');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Witel Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nama">Witel</label>
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
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                </form>
                <span className="signup-link" onClick={handleLoginAsAdmin}>Login as Admin</span>
            </div>
        </div>
    );
}

export default LoginPage;
