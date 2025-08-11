import React, { useState } from 'react';
import '../css/contactFormIndex.css'


function ContactForm() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    findUs: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    fetch("https://formspree.io/f/xvgkdprb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(() => {
      alert("Thank you!");
      setFormData({ name: "", email: "", phone: "", findUs: "", message: "" });
    })
    .catch((err) => console.error("Form error:", err));
  }
}

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    // Regular expression for phone number validation
    const phonePattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;
    return phonePattern.test(phone);
  };

  return (
    <section id="cs-contact-242">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">I am Excited to hear from you</span>
          <h2 className="cs-title">Contact Me</h2>
          <p className="cs-text">
          📩 Note: This contact form is powered by Formspree, a secure third-party service that delivers your message directly to my inbox. Feel free to reach out — I’ll respond as soon as possible!
          </p>
        </div>
        {/* Form */}
        <form id="cs-form-242" name="Contact Form"  onSubmit={handleSubmit}>
          <label className="cs-label">
            Name
            <input
              className={`cs-input ${formErrors.name ? 'invalid' : ''}`}
              type="text"
              id="name-242"
              name="name"
              placeholder="John/Jane Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </label>
          <label className="cs-label">
            Email
            <input
              className={`cs-input ${formErrors.email ? 'invalid' : ''}`}
              type="email"
              id="email-242"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </label>
          <label className="cs-label">
            Phone
            <input
              className={`cs-input ${formErrors.phone ? 'invalid' : ''}`}
              type="tel"
              id="phone-242"
              name="phone"
              placeholder="000-000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          </label>
          <label className="cs-label">
            How Did You Find Me?
            <input
              className="cs-input"
              type="text"
              id="find-242"
              name="findUs"
              placeholder="Social Media, Family, Friend..."
              value={formData.findUs}
              onChange={handleChange}
            />
          </label>
          <label className="cs-label cs-label-message">
            Message
            <textarea
              className="cs-input cs-textarea"
              name="message"
              id="message-242"
              placeholder="Hello, I’m interested in..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button className="cs-button-solid cs-submit" type="submit">Submit Message Now</button>
        </form>
        {/* Contact Info */}
        <div className="cs-right-section">
          <ul className="cs-ul">
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/mail.svg" alt="mail icon" className="cs-icon" width="36" height="36" decoding="async" />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Email:</span>
                <a href="mailto:thanos@example.com" className="cs-link">thanos@example.com</a>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone.svg" alt="phone icon" className="cs-icon" width="36" height="36" decoding="async" />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Phone:</span>
                <a href="tel:123-456-7890" className="cs-link">(123) 456-7890</a>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin.svg" alt="address icon" className="cs-icon" width="36" height="36" decoding="async" />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Address:</span>
                <a href="/" className="cs-link">Lockwood St, Boise ID</a>
              </div>
            </li>
          </ul>
          {/* Picture */}
          <picture className="cs-picture">
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map-m.jpg" />
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map.jpg" />
            <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map.jpg" alt="google map" width="462" height="438" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
