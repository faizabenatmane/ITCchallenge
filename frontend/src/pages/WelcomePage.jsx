import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/welcomepage.css';
import card1Image from '../assets/images/card1.png';
import card2Image from '../assets/images/card2.png';
import coin from '../assets/images/coin.png';
import logo from '../assets/images/logo.png';


const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* Top Toolbar */}
      <div className="toolbar">
        <img className="logo" src={logo } alt="coin image" />
        <h1 id="itcush" >ITCush</h1>
        <div className="actions">
          <button onClick={() => navigate('/login')} className="btn">Login</button>
          <LanguageSwitcher />
        </div>
      </div>
      {/* Welcome Section */}
      <div className="welcome-content">
        <h2>BANK ACCOUNT</h2>
        <p>Manage your money easily and securely Track your <br/>balance  monitor your transactions  and make money<br/> transfers with the touch of a button.</p>
      </div>
      <div className='images'>
          <img className="coin" src={coin } alt="coin image" />
          <img class="card1" src={card1Image} alt="c image" />
          <img class="card2" src={card2Image } alt="c image" />
      </div>
    </div>
  );
}

export default WelcomePage;

