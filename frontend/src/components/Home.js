import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch(() => alert('Error fetching profile'));
    } else {
      alert('Unauthorized access');
    }
  }, []);

  return user ? <h1>Welcome, {user.username}</h1> : <h1>Loading...</h1>;
};

export default Home;
