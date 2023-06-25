import React from 'react';
import { Link } from 'react-router-dom';
import './Presell.css';
import imgOquee from '../../img/300x300.png'
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Presell() {
  return (
    <div className="fundoTopPresell">

        <div className='divImgPresell'>
         <img src={imgOquee} className='vslVideo'></img>
         </div>
         <div className='divConjuntoPresell'>
         <h1 className='tituloTopPresell'>Você está prestes a comprar o Deusas da Boa forma</h1>
         <h1 className='subtituloTopPresell'>Verifique se ainda há vagas!</h1>
        <div className='imgTopPresell'>
        <ProgressBar/>
            </div>
            </div>
    </div>
  );
}

export default Presell;
