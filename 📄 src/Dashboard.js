import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:4000/protected', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setMessage(res.data.message))
    .catch(() => setMessage('Access denied. Invalid or expired token.'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
