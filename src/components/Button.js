import React, { useEffect, useState } from 'react';
import './Button.css';

function Button({text}) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const triggerPoint = 800; // Ajuste o valor para definir o ponto em que o botão deve aparecer

      if (scrollTop > triggerPoint) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`queroEmagrecerAgora ${showButton ? 'visible' : ''}`}>
      ✔ {text}
    </button>
  );
}

export default Button;
