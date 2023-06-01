import React, { useState, useEffect } from 'react';
import './Countdown.css';
import moment from 'moment';
import Button from '../Button';

function Countdown() {
  const [scrollCount, setScrollCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const promotionEndTime = moment().add(5, 'hours');
    const interval = setInterval(() => {
      const currentTime = moment();
      const duration = moment.duration(promotionEndTime.diff(currentTime));
      const hours = Math.floor(duration.asHours());
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);

      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setRemainingTime('Promoção encerrada');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount((prevCount) => prevCount + 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollCount >= 2) {
      setVisible(true);
    }
  }, [scrollCount]);

  return (
    <div className={`countdown-container ${visible ? 'visible' : ''}`}>
      <h1 className="countdown-title">Aproveite a promoção HOJE!</h1>
      <div className="countdown-content">
        {visible && (
          <>
            <p>As condições exclusivas encerram em: {remainingTime}</p>
            {remainingTime !== 'Promoção encerrada' && <Button  text='Comprar agora!'/>}
          </>
        )}
      </div>
    </div>
  );
}

export default Countdown;
