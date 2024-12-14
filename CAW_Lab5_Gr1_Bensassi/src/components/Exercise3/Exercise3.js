import React, { useState } from 'react';

function Exercise3() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setUsername('');
    setPassword('');
  };

  const handleDelete = (indexToDelete) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Username: {user.username}, Password: {user.password}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise3;
