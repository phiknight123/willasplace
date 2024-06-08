// src/CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, titleImage, startButtonImage, resetButtonImage, countdownSound, greenSound, redSound, greenDuration }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [color, setColor] = useState('');

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (remainingTime <= 0 && isRunning) {
      setIsRunning(false);
      setColor('green');
      setTimeout(() => {
        setColor('red');
      }, greenDuration * 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime, greenDuration]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setColor('');
      // Play countdown sound
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingTime(initialTime);
    setColor('');
    // Stop sound if any
  };

  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '10px', borderRadius: '10px' }}>
      <img src={titleImage} alt="title" style={{ height: '50px' }} />
      <h1>{remainingTime}s</h1>
      <button onClick={startTimer}>
        <img src={startButtonImage} alt="start" style={{ height: '40px' }} />
      </button>
      <button onClick={resetTimer}>
        <img src={resetButtonImage} alt="reset" style={{ height: '40px' }} />
      </button>
    </div>
  );
};

export default CountdownTimer;
