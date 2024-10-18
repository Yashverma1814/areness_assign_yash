import React, { useState } from 'react';
import './Login.css';
import loginImage from '../../assets/images/login-image.png'; // Add your image path here
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!username || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    else{
        navigate('/dashboard')
    }

    // Clear error message if validation passes
    setErrorMessage('');

    // Proceed with login logic (e.g., API call)
    console.log('Logging in with', { username, password });

    // Redirect or any other logic after successful login
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          <button className="login-btn" onClick={handleSubmit}>Login</button>

          <div className="social-login">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>

          <p>Don’t have an account? <Link to={"/register"}>Create One</Link></p>
        </div>
        <div className="login-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;
