import React, { useState } from 'react';

function Question2() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {clickCount % 2 === 1 ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
}

export default Question2;
