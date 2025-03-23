import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';


// Components
import  Overview  from '../components/Overview';
import MyCard from '../components/MyCard.jsx';
import Transaction from '../components/Transaction';
import Security from '../components/Security';
import Option from '../components/Option';

const DashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState('overview');
  const username = "Faiza";

  const renderComponent = () => {
    switch (activeComponent) {
      case 'overview':
        return <Overview username={username} />;
      case 'myCard':
        return <MyCard />;
      case 'transaction':
        return <Transaction />;
      case 'security':
        return <Security />;
      case 'option':
        return <Option />;
      default:
        return <Overview username={username} />;
    }
  };

  return (
    <div className="dashboard-container">
     
      <header className="header">
        <div className="logo-section">
          <img className="logo" src={logo} alt="ITCush logo" />
          <h1 id="itcush">ITCush</h1>
        </div>
        
        <nav className="main-nav">
          <div className="nav-item">
            <span>Personal</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="nav-item">
            <span>Business</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="nav-item">
            <span>Fintech</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="nav-item">
            <span>About</span>
            <span className="dropdown-arrow"></span>
          </div>
        </nav>

        <div className="user-menu">
          <div className="user-avatar">
            <img src={avatar} alt="User Avatar" />
          </div>
          <span className="username">Faiza</span>
          <div className="language-selector">
            English ▼
          </div>
        </div>
        
      </header>

      <div className="dashboard-content">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className={activeComponent === 'overview' ? 'active' : ''}>
              <button onClick={() => setActiveComponent('overview')}>
                <i className="icon-dashboard"></i>
                <span>DashBoard</span>
              </button>
            </li>
            <li className={activeComponent === 'myCard' ? 'active' : ''}>
              <button onClick={() => setActiveComponent('myCard')}>
                <i className="icon-card"></i>
                <span>My Card</span>
              </button>
            </li>
            <li className={activeComponent === 'transaction' ? 'active' : ''}>
              <button onClick={() => setActiveComponent('transaction')}>
                <i className="icon-transaction"></i>
                <span>Transaction</span>
              </button>
            </li>
            <li className={activeComponent === 'security' ? 'active' : ''}>
              <button onClick={() => setActiveComponent('security')}>
                <i className="icon-security"></i>
                <span>Security</span>
              </button>
            </li>
            <li className={activeComponent === 'option' ? 'active' : ''}>
              <button onClick={() => setActiveComponent('option')}>
                <i className="icon-option"></i>
                <span>Option</span>
              </button>
            </li>
          </ul>
        </aside>
        
        <main className="main-content">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;



// Placeholder Components for other sections





