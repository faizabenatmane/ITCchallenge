import React from 'react';
import '../styles/cardreq.css';

const CardRequestPage = () => (
  <div className="card-request-container">
    <h2>Request Bank Card</h2>
    <form className="card-request-form">
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Security Number" required />
      <button type="submit">Submit Request</button>
    </form>
  </div>
);

export default CardRequestPage;
