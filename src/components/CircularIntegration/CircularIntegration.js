import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CircularIntegration.css';

export default function CircularIntegration() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled(prev => prev += 5), 50);
    }
  }, [filled, isRunning]);

  const progressBarClassName = `progressbar ${isRunning ? 'progressbar--active' : ''}`;

  return (
    <div>
      <div className={progressBarClassName}>
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
          <Link to="/second" className="link">Compre agora</Link>
        ) : (
          <button className="btn" onClick={() => setIsRunning(true)}>Clique para verificar disponibilidade!</button>
        )}
      </div>
    </div>
  );
}
