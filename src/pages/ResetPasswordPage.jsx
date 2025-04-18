import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Alert, Container, Card } from 'react-bootstrap';

function ResetPasswordPage() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // POST request to your backend endpoint
      await axios.post(`/api/reset-password/${token}`, { password });
      setMessage("Password has been successfully reset!");
      setError('');
    } catch (err) {
      setError("Reset failed. Invalid or expired link.");
      setMessage('');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px', padding: '20px' }}>
        <h3 className="text-center">Reset Your Password</h3>
        
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>New Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">Reset Password</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default ResetPasswordPage;
