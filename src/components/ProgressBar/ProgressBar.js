import React, { useState, useEffect } from 'react';
import './ProgressBar.css'
import { useNavigate } from 'react-router-dom';

export default function Progressbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled(prev => prev += 2), 50);
    } else if (filled === 100) {
      navigate('/second');
    }
  }, [filled, isRunning, navigate]);

  return (
    <div>
      <div className="progressbar">
        <div
          style={{
            height: '3rem',
            width: `${filled}%`,
            backgroundColor: '#D68C45',
            transition: 'width 0.5s'
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <button className="btnFirst" onClick={() => setIsRunning(true)}>Verificar disponibilidade!</button>
    </div>
  );
}
