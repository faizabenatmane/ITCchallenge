import React, { useState } from 'react';
import '../styles/cardreq.css';

const CardRequestPage = () => {
  const [formData, setFormData] = useState({
    cardType: 'debit',
    cardDesign: 'standard',
    deliveryAddress: '',
    city: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    agreeTOS: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };
  
  if (submitSuccess) {
    return (
      <div className="card-request-container">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Request Submitted Successfully!</h2>
          <p>Your card request has been received. You'll receive confirmation via email shortly.</p>
          <p>Request reference: <strong>{Math.random().toString(36).substring(2, 10).toUpperCase()}</strong></p>
          <button className="primary-button" onClick={() => window.history.back()}>Return to Dashboard</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="card-request-container">
      <h1>Request a New Bank Card</h1>
      <p className="intro-text">Complete the form below to request your ITCush bank card. Standard delivery takes 5-7 business days.</p>
      
      <form onSubmit={handleSubmit} className="card-request-form">
        <div className="form-section">

          <h2>Your Information</h2>
          <div className="form-group">
            <label htmlFor="deliveryAddress">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="fname" 
              value={formData.f}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryAddress">Last Name</label>
            <input 
              type="text" 
              id="lname" 
              name="lname" 
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
          

          <div className="form-group">
            <label>Sex</label>
            <div className="radio-group">
              <div className="radio-option">
                <input 
                  type="radio" 
                  id="debit" 
                  name="cardType" 
                  value="debit"
                  checked={formData.cardType === 'debit'}
                  onChange={handleChange}
                />
                <label htmlFor="debit">Female</label>
              </div>
              <div className="radio-option">
                <input 
                  type="radio" 
                  id="credit" 
                  name="cardType" 
                  value="credit"
                  checked={formData.cardType === 'credit'}
                  onChange={handleChange}
                />
                <label htmlFor="credit">Male</label>
              </div>
              
            </div>
          </div>
          
          
        </div>
        
        <div className="form-section">
          <h2>Delivery Information</h2>
          
          <div className="form-group">
            <label htmlFor="deliveryAddress">Delivery Address</label>
            <input 
              type="text" 
              id="deliveryAddress" 
              name="deliveryAddress" 
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="address-grid">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input 
                type="text" 
                id="postalCode" 
                name="postalCode" 
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select 
              id="country" 
              name="country" 
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              <option value="Algeria">Algeria</option>
              <option value="Morocco">Morocco</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Egypt">Egypt</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1 (234) 567-8900"
              required
            />
          </div>
        </div>
        
        <div className="form-group checkbox-group">
          <input 
            type="checkbox" 
            id="agreeTOS" 
            name="agreeTOS" 
            checked={formData.agreeTOS}
            onChange={handleChange}
            required
          />
          <label htmlFor="agreeTOS">I agree to the <a href="#">terms and conditions</a> including applicable fees</label>
        </div>
        
        <div className="form-actions">
          <button type="button" className="secondary-button" onClick={() => window.history.back()}>
            Cancel
          </button>
          <button 
            type="submit" 
            className="primary-button" 
            disabled={isSubmitting || !formData.agreeTOS}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardRequestPage;