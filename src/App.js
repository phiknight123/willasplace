// src/App.js
import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

const App = () => {
  const timers = [
    { initialTime: 3000, titleImage: 'beginservice.png', startButtonImage: 'beginserviceicon.png', resetButtonImage: 'reset.png', countdownSound: 'countdown.mp3', greenSound: 'green.mp3', redSound: 'red.mp3', greenDuration: 10 },
    { initialTime: 7, titleImage: 'wash.png', startButtonImage: 'washicon.png', resetButtonImage: 'reset.png', countdownSound: 'countdown.mp3', greenSound: 'green.mp3', redSound: 'red.mp3', greenDuration: 10 },
    { initialTime: 10, titleImage: 'mix.png', startButtonImage: 'mixicon.png', resetButtonImage: 'reset.png', countdownSound: 'countdown.mp3', greenSound: 'green.mp3', redSound: 'red.mp3', greenDuration: 10 },
    { initialTime: 12, titleImage: 'chop.png', startButtonImage: 'chopicon.png', resetButtonImage: 'reset.png', countdownSound: 'countdown.mp3', greenSound: 'green.mp3', redSound: 'red.mp3', greenDuration: 10 },
    { initialTime: 20, titleImage: 'cook.png', startButtonImage: 'cookicon.png', resetButtonImage: 'reset.png', countdownSound: 'countdown.mp3', greenSound: 'green.mp3', redSound: 'red.mp3', greenDuration: 10 },
    { initialTime: 45, titleImage: 'batch.png', startButtonImage: 'batchicon.png', resetButtonImage: 'reset.png', countdownSound: 'countdown.mp3', greenSound: 'green.mp3', redSound: 'red.mp3', greenDuration: 10 },
  ];

  return (
    <div className="App">
      <div className="grid-container">
        {timers.map((timer, index) => (
          <CountdownTimer key={index} {...timer} />
        ))}
      </div>
    </div>
  );
};

export default App;
