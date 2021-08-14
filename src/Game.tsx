import React, { useState } from "react";
import Box from './components/Box/Box';

export default function App() {

  const [squareBoxes, setSquareBoxes] = useState(Array(9).fill(""));

  const resetGame = () => {

    // adding random just for testing purpose only. will be removed when write actual game code
    setSquareBoxes(Array(9).fill(Math.random())); 
  }

  return (
      <div>
        <div className="main">
          {squareBoxes.map((value, index) => (
            <Box
              key={index}
              value={value}
            />
          ))}
        </div>
        <button onClick={resetGame}>Reset</button>
      </div>
  );
}
