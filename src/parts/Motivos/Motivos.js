import React, { useEffect } from 'react';

import calculadora from '../../img/cards/calculadora.png'
import halterofilista from '../../img/cards/halterofilista.png'
import './Motivos.css';
import Card from '../../components/Card';

function Motivos() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const textElements = document.querySelectorAll('.highlight-text');

      textElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().bottom;
        const triggerPoint = window.innerHeight * 1; // Adjust the value to change the activation point

        if (elementTop < triggerPoint) {
          const scrollPercentage = 1.25 - (elementTop / triggerPoint);
          const highlightWidth = scrollPercentage * element.offsetWidth;

          element.style.backgroundImage = `linear-gradient(to right, #2C6E49 ${highlightWidth}px, transparent ${highlightWidth}px)`;
        } else {
          element.style.backgroundImage = 'none';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  return (
    <>
      <div className="fundoMotivos">
        <h1 className="tituloMotivos">Veja o que você vai aprender no <span className="highlight-text">Deusas da Boa Forma</span></h1>
        <h2 className="subtituloMotivos">Tudo passo a passo</h2>
        <div className="cardsMotivos">
          <Card imagem={calculadora} subtitulo='Calcule as calorias diárias' texto='O passo a passo para você criar campanhas do absoluto ZERO, tudo de forma prática e atual.'/>
          <Card imagem={halterofilista} subtitulo='Calcule as calorias diárias' texto='O passo a passo para você criar campanhas do absoluto ZERO, tudo de forma prática e atual.'/>
          <Card imagem='http://via.placeholder.com/150' subtitulo='Calcule as calorias diárias' texto='O passo a passo para você criar campanhas do absoluto ZERO, tudo de forma prática e atual.'/>
          <Card imagem='http://via.placeholder.com/150' subtitulo='Calcule as calorias diárias' texto='O passo a passo para você criar campanhas do absoluto ZERO, tudo de forma prática e atual.'/>
          <Card imagem='http://via.placeholder.com/150' subtitulo='Calcule as calorias diárias' texto='O passo a passo para você criar campanhas do absoluto ZERO, tudo de forma prática e atual.'/>
        </div>
      </div>
    </>
  )
}

export default Motivos;
