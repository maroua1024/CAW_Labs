import React, { useState } from 'react';

function Exercise4() {
  const [divStyle, setDivStyle] = useState(null);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newDiv = { height: `${height}px`, width: `${width}px`, backgroundColor: color };
    setDivStyle(newDiv);
    setHeight('');
    setWidth('');
    setColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Height :
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Width :
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Background Color:
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {divStyle && (
          <div
            style={{
              height: divStyle.height,
              width: divStyle.width,
              backgroundColor: divStyle.backgroundColor,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Exercise4;
