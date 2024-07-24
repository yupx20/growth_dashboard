import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styling/Profil.css';

function Profil() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/witel/${userId}/`);
                const data = await response.json();

                if (response.ok) {
                    setUserData(data);
                    setErrorMessage('');
                } else {
                    setErrorMessage(data.message || 'Failed to fetch user data');
                }
            } catch (error) {
                setErrorMessage('Error fetching user data');
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchUserData();
    }, [userId]);

    if (errorMessage) {
        return <div className="error-message">{errorMessage}</div>;
    }

    return (
        <div className="profil-page">
            <div className="profil-container">
                {userData ? (
                    <>
                        <h2>User Profile</h2>
                        <div className="profil-details">
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Phone:</strong> {userData.phone}</p>
                            <p><strong>Address:</strong> {userData.address}</p>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default Profil;
