import React, { useState } from 'react';

function Question1() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

export default Question1;
