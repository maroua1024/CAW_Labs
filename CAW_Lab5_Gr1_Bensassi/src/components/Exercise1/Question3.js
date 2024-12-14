import React, { useState } from 'react';

function Question3() {
  const [message, setMessage] = useState('');

  const handleClick = (buttonNumber) => {
    setMessage(`Button #${buttonNumber} was clicked`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button1</button>
      <button onClick={() => handleClick(2)}>Button2</button>
      <button onClick={() => handleClick(3)}>Button3</button>
      <p>{message}</p>
    </div>
  );
}

export default Question3;
