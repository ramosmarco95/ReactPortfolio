import { Link } from 'react-router-dom';
import '../css/loginForm.css'
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Implement your password validation logic here
    // For example, checking if the password length is greater than or equal to 6
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data validation
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Perform login logic here
    alert('Thank you!')
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    
     // Clear form inputs after submission
     setEmail('');
     setPassword('');
     setRememberMe(false);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setErrors({});
    setRememberMe(false);
  };

  return (
    <form className='login-form' onSubmit={handleSubmit} autoComplete="on">
      <div className='login-div'>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setErrors({ ...errors, email: !validateEmail(email) ? 'Invalid email format' : '' })}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div className='login-div'>
        <label htmlFor="password" >Password:</label>
        <input
          id="password"
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setErrors({ ...errors, password: !validatePassword(password) ? 'Password must be at least 6 characters long' : '' })}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <div className='login-div'>
        <label>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </label>
      </div>

      <button type="submit" className="btn m-3 bg-success  btn-block bold">Login</button>

      <div className="clearfix ">
        <button className="resetBtn" type="button" onClick={handleCancel}>Cancel</button>
        <span>Forgot <Link style={{ marginLeft: '5px' }} to="/reset-password:token">password</Link></span>
      </div>
    </form>
  );
}

export default LoginForm;
