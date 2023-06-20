import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link} from 'react-router-dom';
import './CircularIntegration.css';
import Button from '../Button';
import AppSecond from '../../AppSecond';

export default function CircularIntegration() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled(prev => prev += 5), 50);
    }
  }, [filled, isRunning]);

  return (
  
    <div>
      <div className="progressbar">
        <div
          style={{
            height: '100%',
            width: `${filled}%`,
            backgroundColor: '#2C6E49',
            transition: 'width 0.5s',
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <div className="buttonContainer">
        {filled === 100 ? (

         <Link to="/second"  className="link">Link</Link>

        ) : (
          <button className="btn" onClick={() => setIsRunning(true)}>Run</button>
        )}
      </div>
    </div>

  );
}
