import React, { useState } from 'react';
import '../App.css';

/*

decimal number system-10(0,1,2,3,4,5,6,7,8,9)-->100 2400
binary number system(0,1)

decimal    binary
           8421        3
00         0000
01         0001
02         0010
08         1000
15         1111       


*/

//hexadecimal
// hexadecimal(16)//0-9  A,b,c,d,e,f



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
