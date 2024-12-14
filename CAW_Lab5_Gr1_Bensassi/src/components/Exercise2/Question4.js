import React from 'react';

function Question4({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>Element {index + 1} is: {item}</li>
      ))}
    </ul>
  );
}

export default Question4;
