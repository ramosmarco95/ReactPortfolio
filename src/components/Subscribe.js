
import reviews_subscribe from '../css/reviews_subscribe.css'
import React, { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(true); // Reset validation status on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted with email:', email);
    alert('Thank you!')
    // Clear input field after form submission
    setEmail('');
  };
  

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <section id="cta-1611">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Subscribe</span>
          <h2 className="cs-title">Subscribe Your Email for Newsletter & Promotion</h2>
          <p className="cs-text">
            Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.
          </p>
          <form className="cs-form" name="Contact Form" onSubmit={handleSubmit}>
            <input 
              className={`cs-input ${isValid ? '' : 'invalid'}`}
              type="email" 
              id="cs-email-302-1611" 
              name="find-us" 
              placeholder="Email Address" 
              value={email} 
              onChange={handleInputChange}
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
            {!isValid && <p className="error-message">Please enter a valid email address.</p>}
            <button className="cs-button-solid cs-submit" type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
      {/* Background Image */}
      <picture className="cs-background">
        {/* Mobile and Tablet Image */}
        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/underwater.jpg" />
        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/underwater.jpg" />
        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/underwater.jpg" alt="water" width="1920" height="486" aria-hidden="true" />
      </picture>
      <div className="cs-wrapper">
        <img className="cs-fish cs-fish1" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/left-fish.svg" alt="fish" width="1920" height="486" aria-hidden="true" />
        <img className="cs-fish cs-fish1" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/right-fish.svg" alt="fish" width="1920" height="486" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Subscribe;
