import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginAdmin.css';

function LoginAdminPage() {
    const navigate = useNavigate();

    const [adminName, setAdminName] = useState(''); 
    const [adminPassword, setAdminPassword] = useState('');

    const handleAdminLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/auth/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ adminName, adminPassword }),
            });

            const data = await response.json();

            if (data.status) {
                const token = data.token;
                const { role } = JSON.parse(atob(token.split('.')[1]));

                if (role === 'admin') {
                    navigate('/adminhome');
                } else {
                    navigate('/home');
                }
            } else {
                console.error('Admin login failed:', data.message);
            }
        } catch (error) {
            console.error('Error during admin login:', error.message);
        }
    };

    return (
        <div className="login-admin-page">
            <div className="login-admin-container">
                <h2>Admin Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="adminName">NIP</label>
                        <input
                            type="text"
                            id="adminName"
                            value={adminName}
                            onChange={(e) => setAdminName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adminPassword">Password</label>
                        <input
                            type="password"
                            id="adminPassword"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" className="login-admin-btn" onClick={handleAdminLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginAdminPage;
