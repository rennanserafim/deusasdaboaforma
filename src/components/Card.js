import React from 'react';
import './Card.css';

function Card({ imagem, titulo,subtitulo, texto }) {
  return (
    <div className="card">
      <div className='contentCard'>
      <img src={imagem} className="card-img" alt="Imagem do card" />
      <h2 className="card-titulo">{titulo}</h2>
      <h2 className="card-subtitulo">{subtitulo}</h2>
      <p className="card-texto">{texto}</p>
      </div>
    </div>
  );
}

export default Card;