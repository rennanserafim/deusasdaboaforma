
import calculadora from '../../img/cards/calculadora.png'
import halterofilista from '../../img/cards/halterofilista.png'
import './Motivos.css';
import Aos from "aos";
import "aos/dist/aos.css"
import Card from '../../components/Card';
import { useEffect } from 'react';

function Motivos() {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  },[]);
    
  return (
    <>
      <div  className="fundoMotivos">
        <div className='titulosFundo'>
        <h1  className="tituloMotivos">Esse guia foi criado baseado na nova metodologia <span>americana de emagrecimento.</span></h1>
        <h1 className="tituloMotivos">Através de pesquisas, os cientistas descobriram que <span>todos os seres humanos possuem o ‘’fator genético’’</span> do emagrecimento herdado pelos nossos ancestrais...</h1>
        <h2 className="subtituloMotivos">Dentro desse material, você entenderá exatamente como despertar o <span>fator do emagrecimento natural em você!</span></h2>
        </div>
        <div  className="cardsMotivos">
          <Card imagem={calculadora} subtitulo='Aos seus hábitos e rotina' texto=''/>
          <Card imagem={halterofilista} subtitulo='A como consumir os alimentos de forma correta' texto=''/>
          <Card imagem='http://via.placeholder.com/150' subtitulo='Como se manter motivada' texto=''/>
          <Card imagem='http://via.placeholder.com/150' subtitulo='Como fazer exercícios de forma certa' texto=''/>
          </div>
      </div>
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='boxDiv'></div>
    </>
  )
}

export default Motivos;
