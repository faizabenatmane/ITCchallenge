import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      padding: '10px',
      marginLeft: '10px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' ,marginLeft: '10px'}}>
        Personal<span> ▾ </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px',marginLeft: '10px' }}>
        Business <span>▾</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px',marginLeft: '10px' }}>
      Fintech <span>▾</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px',marginLeft: '20px' }}>
        About <span>▾</span>
      </div>
    </div>
  );
};
export default Navbar;
