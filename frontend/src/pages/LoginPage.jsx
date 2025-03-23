import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

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
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="login-image"></div>
    </div>
  );
};

export default LoginPage;
