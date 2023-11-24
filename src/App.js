import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const flipText = () => {
    const flipped = text.split('').reverse().join('');
    setText(flipped);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upside Down Text Generator</h1>
        <div>
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)} // As you're changing it shows the flipped text
          />
          <button onClick={flipText}>Flip</button>
        </div>
        <p className={text ? 'upside-down' : ''}>{text}</p>
      </header>
    </div>
  );
}

export default App;
