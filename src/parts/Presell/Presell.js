import React from 'react';
import { Link } from 'react-router-dom';
import './Presell.css';
import imgOquee from '../../img/300x300.png'
import CircularIntegration from '../../components/CircularIntegration/CircularIntegration';

function Presell() {
  return (
    <div className="fundoTopPresell">

        <div className='divImgPresell'>
         <img src={imgOquee} className='vslVideo'></img>
         </div>
         <h1 className='tituloTopPresell'>Você está prestes a comprar o Deusas da Boa forma, verifique se ainda há vagas!</h1>
      <div className='imgTopPresell'>
        <CircularIntegration />
            </div>
    </div>
  );
}

export default Presell;
