
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import chip from '../assets/images/ship.png';



const MyCard = () => {
  const navigate = useNavigate();
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  
  const handleRequestCard = () => {
    navigate('/card-request');
  };
  const toggleCardFreeze = () => {
    setIsCardFrozen(!isCardFrozen);
  };

 

return(
  <div className="my-card-container">
    <h1>My Card</h1>
    <div className="cardbtn">
    <div className="credit-card">
      <div className="card-background"></div>
      <div className="card-content">
        <h2>ITCush</h2>
        <div className="card-chip">
          <img src={chip} alt="Chip" />
        </div>
        <div className="card-number">4532 3100 5473 1234</div>
        <div className="card-details">
          <div className="card-holder">FAIZA BENATMANE</div>
          <div className="card-expiry">09/27</div>
        </div>
      </div>
    </div>
    <button onClick={handleRequestCard}>Request a Bank Card</button>
    </div>

    <div className="card-actions">

      {/* // freeze card */}

      
      <div className="freeze-card-container">
          <button 
            onClick={toggleCardFreeze}
            style={{
              backgroundColor: isCardFrozen ? '#4CAF50' : '#f44336',
              color: 'white'
            }}
          >
            {isCardFrozen ? 'Activate Card' : 'Freeze Card'}
          </button>
          {isCardFrozen && (
            <div className="freeze-status-message" style={{ color: '#f44336', marginTop: '5px' }}>
              Your card is deactivated
            </div>
          )}
        </div>
  

      


      {/* // freeze card */}
      <button>Card Details</button>
    </div>


{/* estimate balance */}
    <div className="balance-card">
  <div className="balance-header">
    <h2 className="balance-title">Estimated Balance</h2>
    <div className="balance-actions">
      <button className="balance-action-btn">Deposit</button>
      <button className="balance-action-btn">Withdraw</button>
      <button className="balance-action-btn">Transfer</button>
    </div>
  </div>
  
  <div className="balance-details">
    <h1 className="balance-amount">
      0.85909312 $ USDT
      <span className="dropdown-arrow"></span>
    </h1>
    
    <div className="balance-info">
      <div className="balance-fiat">≈ $0.86</div>
      <div className="balance-pnl">
        <span className="pnl-label">Today's PnL</span>
        <span className="pnl-value positive">+$0.00(0.00%)</span>
      </div>
    </div>
  </div>
</div>

  </div>
  
);
}
export default MyCard;