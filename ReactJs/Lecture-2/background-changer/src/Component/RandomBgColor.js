import React, { useState } from 'react';
import '../App.css';

function RandomBgColor() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleChangeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <h1>Background Changer</h1>
        <button onClick={handleChangeColor}>Change Background Color</button>
      </header>
    </div>
  );
}

export default RandomBgColor;
