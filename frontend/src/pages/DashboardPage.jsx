import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const DashboardPage = () => (
  <div className="dashboard-container">
    <Link to="/card-request">
      <button className="request-btn">Request Bank Card</button>
    </Link>
  </div>
);

export default DashboardPage;
