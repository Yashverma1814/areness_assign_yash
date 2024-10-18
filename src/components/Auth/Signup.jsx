import React, { useState } from 'react';
import './Signup.css';
import signupImage from '../../assets/images/illustration-register.png'; // Add your image path here
import { Link,useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password length
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
    else{
      navigate("/")
    }

    // Clear error message if validation passes
    setErrorMessage('');

    // Additional checks can be added here (e.g., matching passwords)

    // Proceed with signup logic (e.g., API call)
    console.log('Signing up with', { firstName, lastName, username, email, password });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <label>
            <input type="checkbox" /> I agree to all terms
          </label>
          <button className="signup-btn" onClick={handleSubmit}>Register</button>
          <p>Already have an account? <Link to={"/"}>Sign in</Link></p>
        </div>
        <div className="signup-image">
          <img src={signupImage} alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
