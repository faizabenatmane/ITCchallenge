// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import LanguageSwitcher from '../components/LanguageSwitcher';
// import Navbar from '../components/Navbar';
// import '../styles/welcomepage.css';
// import card1Image from '../assets/images/card1.png';
// import card2Image from '../assets/images/card2.png';
// import coin from '../assets/images/coin.png';
// import logo from '../assets/images/logo.png';


// const WelcomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="welcome-container">
//       {/* Top Toolbar */}
//       <div className="toolbar">
//         <img className="logo" src={logo } alt="coin image" />
//         <h1 id="itcush" >ITCush</h1>
//         <Navbar />
       
//         <div className="actions">
//           <button onClick={() => navigate('/login')} className="btn">Login</button>
//           <LanguageSwitcher />
//         </div>
//       </div>
//       {/* Welcome Section */}
//       <div className="welcome-content">
//         <h2>BANK ACCOUNT</h2>
//         <p>Manage your money easily and securely Track your <br/>balance  monitor your transactions  and make money<br/> transfers with the touch of a button.</p>
//       </div>
//       <div className='images'>
//           <img className="coin" src={coin } alt="coin image" />
//           <img class="card1" src={card1Image} alt="c image" />
//           <img class="card2" src={card2Image } alt="c image" />
//       </div>
//     </div>
//   );
// }

// export default WelcomePage;
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
        
        <div className="auth-section">
          <button className="btn login-btn" onClick={() => navigate('/login')}>LOG IN</button>
          <button className="btn signup-btn" onClick={() => navigate('/signup')}>SIGN UP</button>
          <div className="language-selector">
          <LanguageSwitcher />
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="content-area">
        <div className="welcome-content">
          <h2>BANK ACCOUNT</h2>
          <p>
            Manage your money easily and securely Track your
            balance monitor your transactions and make money
            transfers with the touch of a button.
          </p>
        </div>
        
        <div className="card-display">
          <img className="card turquoise-card" src={card2Image} alt="Bankera card" />
          <img className="card purple-card" src={card1Image} alt="Visa card" />
          <img className="coin" src={coin} alt="Bitcoin coin" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
