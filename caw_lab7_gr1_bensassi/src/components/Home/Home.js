import React, { useState } from 'react';
import './Home.css';

function Home({ setClientName, goToMenu }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setClientName(name);
      goToMenu();
    }
  };

  return (
    <div className="home">
      <h2>Welcome to Our Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default Home;
