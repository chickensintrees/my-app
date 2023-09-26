import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Click the button to do something silly!');

  const handleClick = () => {
    setMessage('You did something silly!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <button onClick={handleClick}>
          Do Something Silly
        </button>
      </header>
    </div>
  );
}

export default App;