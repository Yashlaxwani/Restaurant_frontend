import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-hot-toast'; 

const Signup = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        toast.success('Signup successful! You get a 20% discount on your first order.', {
          duration: 5000, // Set duration to 5 seconds
        });
        setIsAuthenticated(true); // Update the authentication state
        navigate('/'); // Redirect to home page
      } else {
        const data = await response.json();
        toast.error(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)
        
        }
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
    </div>
  );
};

export default Signup;
