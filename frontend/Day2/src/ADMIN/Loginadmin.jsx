// Login.js

import React, { useState } from 'react';
import './Loginadmin.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      return;
    }

    // Add your login logic here
    console.log('Logging in with:', username, password);

    // Reset error state after successful login
    setError('');
  };

  const handleForgetPassword = () => {
    // Add logic to handle forget password
    console.log('Forget password clicked');
    // You can navigate to a forget password page or show a modal, etc.
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p className="forget-password" onClick={handleForgetPassword}>
          Forget Password?
        </p>
      </form>
    </div>
  );
};

export default Login;
