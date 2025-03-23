import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/userhome.css';

const UserHomePage = () => (
  <div className="welcome-container">
    <h1>Hello, Username</h1>
    <img src="../assets/images/profile-pic.png" alt="Profile" className="profile-pic" />
    <Link to="/dashboard">
      <button className="dashboard-btn">Dashboard</button>
    </Link>
  </div>
);

export default UserHomePage;
