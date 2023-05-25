import React from 'react';
import './Card.css';

function Card({ imagem, subtitulo, texto }) {
  return (
    <div className="card">
      <img src={imagem} className="card-img" alt="Imagem do card" />
      <h2 className="card-subtitulo">{subtitulo}</h2>
      <p className="card-texto">{texto}</p>
    </div>
  );
}

export default Card;