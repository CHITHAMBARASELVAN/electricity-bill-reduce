import React from 'react';
import Calculator from './Calculator';
import Tips from './Tips';
import Articles from './Articles';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Reduce Your Electricity Bill in India</h1>
      </header>
      <Calculator />
      <Tips />
      <Articles />
    </div>
  );
}

export default App;
