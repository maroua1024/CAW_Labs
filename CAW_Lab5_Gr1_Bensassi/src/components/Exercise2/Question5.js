import React from 'react';
import Question4 from './Question4'; 

function Question5() {
  const tab1 = ['M1', 'STIC', 'CAW'];
  const tab2 = ['BENSASSI', 'Maroua', 'TP5'];

  return (
    <div>
      <h2>Table 1</h2>
      <Question4 data={tab1} />

      <h2>Table 2</h2>
      <Question4 data={tab2} />
    </div>
  );
}

export default Question5;
