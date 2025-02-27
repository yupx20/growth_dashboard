import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginAdmin.css';
import { io } from 'socket.io-client';

function LoginAdminPage() {
    const navigate = useNavigate();

    const [adminName, setAdminName] = useState(''); 
    const [adminPassword, setAdminPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [socket, setSocket] = useState(null);

    // Inisialisasi socket saat komponen dimuat
    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        return () => newSocket.close(); // Tutup koneksi socket saat komponen unmount
    }, []);

    const handleAdminLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login/admin/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: adminName, password: adminPassword }),
            });

            const data = await response.json();
            
            if (data.status) {
                setSuccessMessage(data.message);
                setErrorMessage('');
                alert(`Welcome ${adminName}!`);

                localStorage.setItem('adminName', adminName);

                // Emit event newUser ke server dengan informasi admin
                if (socket) {
                    socket.emit("newUser", { username: adminName});
                }

                // Navigasi ke halaman home dengan state
                navigate('/home', { state: { adminName } });
            } else {
                setErrorMessage(data.message);
                setSuccessMessage('');
                console.error('Admin login failed:', data.message);
            }
        } catch (error) {
            setErrorMessage('Error during admin login');
            console.error('Error during admin login:', error.message);
        }
    };

    const handleLoginAsUser = () => {
        navigate('/');
    };

    return (
        <div className="login-admin-page">
            <div className="login-admin-container">
                <h2>Admin Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="adminName">Username</label>
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
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <span className="signup-link" onClick={handleLoginAsUser}>Login as User</span>
                </form>
            </div>
        </div>
    );
}

export default LoginAdminPage;
