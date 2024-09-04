import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profilepage.css'; 
import Navbar from '../../Components/Navbar/Navbar';

const ProfilePage = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userLogged'));

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div>
        <Navbar/>
        <div className="profile-container">
            <div className="profile-card">
                <h1>Profile</h1>
                <p className="profile-info">Username: {userData.username}</p>
                <p className="profile-info">Email: {userData.email}</p>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
        </div>
    );
}

export default ProfilePage;