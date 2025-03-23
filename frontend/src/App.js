// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import UserHomePage from './pages/UserHomePage';
import DashboardPage from './pages/DashboardPage';
import CardRequestPage from './pages/CardRequestPage';
import Navbar from './components/Navbar';

function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/card-request" element={<CardRequestPage />} />
      </Routes>
    </Router>
   
    
   
  );
}

export default App;
