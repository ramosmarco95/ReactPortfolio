import React, { useState } from 'react';
import '../css/orderIndex.css'; 


const OrderForm = () => {
  // State variables for form fields and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Data validation
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!quantity.trim()) {
      errors.quantity = 'Quantity is required';
    } else if (isNaN(quantity)) {
      errors.quantity = 'Quantity must be a number';
    }
    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // If no errors, submit the form (for demonstration purposes, just logging the data)
    console.log('Submitted:', { name, email, quantity });
    alert('Thank you!')
    // Clear form fields
    setName('');
    setEmail('');
    setQuantity('');
    // Clear errors
    setErrors({});
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear error for the changed field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    // Update state with the new value
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'quantity') {
      setQuantity(value);
    }
  };

  // Function to handle clearing form fields
  const handleClear = () => {
    // Clear form fields
    setName('');
    setEmail('');
    setQuantity('');
    // Clear errors
    setErrors({});
  };

  return (
    <div className="order-container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
          {errors.quantity && <span className="error">{errors.quantity}</span>}
        </div>
        <button type="submit">Submit</button>
        <button className='clear-btn' type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default OrderForm;

