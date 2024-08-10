import React, { useState } from 'react';

const Logout = ({ onLogout }) => {
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Logout successful');
        onLogout(); // Update the authenticated state in the parent component
      } else {
        setMessage(data.message || 'Logout failed. Please try again.');
      }
    } catch (error) {
      setMessage('Logout failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>{message}</p>
    </div>
  );
};

export default Logout;
