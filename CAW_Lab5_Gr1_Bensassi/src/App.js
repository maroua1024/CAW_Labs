import React from 'react';
import Question1Ex1 from './components/Exercise1/Question1';
import Question2Ex1 from './components/Exercise1/Question2';
import Question3Ex1 from './components/Exercise1/Question3';
import Question4Ex1 from './components/Exercise1/Question4';

import Question1Ex2 from './components/Exercise2/Question1';
import Question2Ex2 from './components/Exercise2/Question2';
import Question3Ex2 from './components/Exercise2/Question3';
import Question4Ex2 from './components/Exercise2/Question4';
import Question5Ex2 from './components/Exercise2/Question5';

import Exercise3 from './components/Exercise3/Exercise3';

import Exercise4 from './components/Exercise4/Exercise4';

function App() {
  const tab = ['hello', 'world', 'from', 'react'];
  return (
    <div>
      <h1>Exercise 1</h1>
      <h2>Question 1</h2>
      <Question1Ex1 />

      <h2>Question 2</h2>
      <Question2Ex1 />

      <h2>Question 3</h2>
      <Question3Ex1 />

      <h2>Question 4</h2>
      <Question4Ex1 />

      <h1>Exercise 2</h1>
      <h2>Question 1</h2>
      <Question1Ex2 />

      <h2>Question 2</h2>
      <Question2Ex2 />

      <h2>Question 3</h2>
      <Question3Ex2 />

      <h2>Question 4</h2>
      <Question4Ex2 data={tab} />

      <h2>Question 5</h2>
      <Question5Ex2 />

      <h1>Exercise 3</h1>
      <Exercise3 />

      <h1>Exercise 4</h1>
      <Exercise4 />
    </div>
  );
}

export default App;
