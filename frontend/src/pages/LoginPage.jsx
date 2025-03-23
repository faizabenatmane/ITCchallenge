// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/login.css';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // Example: Basic check (replace with API call)
//     if (email === 'faiza@gmail.com' && password === 'itc') {
//       alert('Login Successful!');
//       navigate('/dashboard'); // Redirect to dashboard after login
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <input type="email" name="email" placeholder="Email" required />
//         <input type="password" name="password" placeholder="Password" required />
//         <button type="submit">Login</button>
//       </form>
//       <div className="login-image"></div>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import logoImage from '../assets/images/logo.png';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // Example: Basic check (replace with API call)
    if (email === 'faiza@gmail.com' && password === 'itc') {
      alert('Login Successful!');
      navigate('/dashboard'); // Redirect to dashboard after login
    } else {
      alert('Invalid email or password');
    }
  };
  
  return (
    <div className="login-container">
      <div className="logo-container">
        <div className="logo">
          <img src={logoImage} alt="ITCush Logo" />
          <h1>ITCush</h1>
        </div>
        
      </div>
      
      <div className="language-selector">
        English ▼
      </div>
      
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome To ITCush</h2>
        
        <div>Email address</div>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter Your Email Address" 
          required 
        />
        
        <div>Password</div>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter Your Password" 
          required 
        />
        
        <button type="submit">LOG IN</button>
        {/* <button className="signup-button">SIGN UP</button> */}
        
        <div className="forgot-password">
          Forget Your Password
        </div>
      </form>
      
      <div className="login-image"></div>
    </div>
  );
};

export default LoginPage;
