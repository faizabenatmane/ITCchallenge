
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import financial_chart from '../assets/images/financial_chart.png';

const Overview = ({ username }) => {
  const transactions = [
    { id: 1, type: 'expense', merchant: 'Starbucks New York LLP', date: '12.01.2020 09:34', amount: -5.30 },
    { id: 2, type: 'expense', merchant: 'Wallmart Marketplace', date: '11.01.2020 21:34', amount: -135 },
    { id: 3, type: 'income', merchant: 'From Catherine Pierce', date: '11.01.2020 16:08', amount: 250 }
  ];

  // Exchange rates (relative to USD)
  const exchangeRates = {
    USD: 135.5,
    EURO: 0.92,
    'ريال': 3.75,  // Saudi Riyal
    DZD:  1    // Algerian Dinar
  };

  // Conversion state
  const [fromCurrency, setFromCurrency] = useState('DZD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);
  const [rate, setRate] = useState(0);

  // Calculate conversion rate between two currencies
  const calculateRate = (from, to) => {
    // Convert everything through USD as the base currency
    return exchangeRates[to] === 0 ? 0 : exchangeRates[from] / exchangeRates[to];
  };

  // Update the conversion rate whenever currencies change
  useEffect(() => {
    const newRate = calculateRate(toCurrency, fromCurrency);
    setRate(newRate);
    // Update toAmount based on new rate
    setToAmount((fromAmount * (1 / newRate)).toFixed(2));
  }, [fromCurrency, toCurrency]);

  // Handle from amount change
  const handleFromAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setFromAmount(value);
    setToAmount((value * (1 / rate)).toFixed(2));
  };

  // Handle to amount change
  const handleToAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setToAmount(value);
    setFromAmount((value * rate).toFixed(2));
  };

  // Handle currency switches
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="overview-container">
      <div className="page-title">
        <h1>Overview</h1>
        <h2>Welcome back, {username}</h2>
      </div>
      
      <div className="dashboard-widgets">
        <div className="widget transactions-widget" >
          <h3>Transactions</h3>
          <div className="transactions-list">
            {transactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-icon">
                  {transaction.type === 'expense' ? 
                    <i className="icon-arrow-up"></i> : 
                    <i className="icon-arrow-down"></i>
                  }
                </div>
                <div className="transaction-details">
                  <div className="merchant">{transaction.merchant}</div>
                  <div className="date">{transaction.date}</div>
                </div>
                <div className={`transaction-amount ${transaction.type}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="widget conversion-widget" style={{  borderRadius: '8px', padding: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3>Conversion</h3>
          <div className="currency-converter">
            <div className="converter-inputs">
              <div className="currency-input">
                <input 
                  type="number" 
                  value={fromAmount} 
                  onChange={handleFromAmountChange}
                />
                <select 
                  value={fromCurrency} 
                  onChange={handleFromCurrencyChange}
                >
                  <option value="USD">USD</option>
                  <option value="EURO">EURO</option>
                  <option value="ريال">ريال</option>
                  <option value="DZD">DZD</option>
                </select>
              </div>
              
              <div className="exchange-icon" onClick={swapCurrencies} style={{ cursor: 'pointer' }}>
                <i className="icon-exchange">⇄</i>
              </div>
              
              <div className="currency-input">
                <input 
                  type="number" 
                  value={toAmount} 
                  onChange={handleToAmountChange}
                />
                <select 
                  value={toCurrency} 
                  onChange={handleToCurrencyChange}
                >
                  <option value="USD">USD</option>
                  <option value="EURO">EURO</option>
                  <option value="ريال">ريال</option>
                  <option value="DZD">DZD</option>
                </select>
              </div>
            </div>
            
            <div className="rate-info">
              Rate = {rate.toFixed(2)}
            </div>
            
            <button className="convert-button" onClick={swapCurrencies}>
              <i className="icon-arrow-right">↔</i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="financial-insights">
        <h3>Financial Insights & Analytics</h3>
        <div className="chart-container">
          <img src={financial_chart} alt="Financial Chart" className="financial-chart" />
          
          <div className="chart-metrics">
            <div className="metric">
              <div className="metric-label">دلتا</div>
              <div className="metric-value">0.50</div>
            </div>
            <div className="metric">
              <div className="metric-label">نقطة التعادل</div>
              <div className="metric-value">5,803.32</div>
            </div>
            <div className="metric">
              <div className="metric-label">معدل الربح</div>
              <div className="metric-value">33.82%</div>
            </div>
            <div className="metric">
              <div className="metric-label">أقصى خسارة</div>
              <div className="metric-value negative">-83.29</div>
            </div>
            <div className="metric">
              <div className="metric-label">أقصى ربح</div>
              <div className="metric-value positive">∞</div>
            </div>
            <div className="metric">
              <div className="metric-label">السعر الأساسي</div>
              <div className="metric-value">5,718.25<span className="currency">USD</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;