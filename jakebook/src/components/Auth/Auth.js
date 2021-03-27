import React, { useState } from 'react';
import '../Auth/auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Auth = () => {
  const [isSignup, setIsSignUp] = useState(false);
  

  const handleSubmit = () => {
    
  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
  }
  
  return (
    <div className="auth-container">

      <div className="form-container">
        <FontAwesomeIcon icon={faGlobeAmericas} className="fingerprint" />
        <h3>{isSignup ? 'Join Us!' : 'Sign In'}</h3>
        <form className="auth-form" onSubmit={ handleSubmit } >
          <div className="input-container">
            {
              isSignup && (
                <div className="name-input-container">
                  <input type="text" name="firstName" handleChange={ handleChange } placeholder="First Name" required />
                  <input type="text" name="lastName" handleChange={ handleChange } placeholder="Last Name" required />
                </div>
              )
            }
            <input className="input" type="email" name="email" handleChange={ handleChange } placeholder="Email" required />
            <input className="input" type="password" name="password" handleChange={ handleChange } placeholder="Password" required />
            { isSignup && <input className="input" type="password" name="password" handleChange={ handleChange } placeholder="Confirm Password" required /> }
            <button className="auth-submit-btn" type="submit">
            {isSignup ? 'Create New Account' : 'Log In'}
          </button>
          </div>
        
          <button className="switch-mode-btn" onClick={switchMode}>
            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
          
        </form>
      </div>
      
    </div>
  )
}

export default Auth;
