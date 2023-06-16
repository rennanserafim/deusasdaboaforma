
import calculadora from '../../img/cards/calculadora.png'
import halterofilista from '../../img/cards/halterofilista.png'
import saudavel from '../../img/cards/saudavel.png'
import motivacao from '../../img/cards/motivacao.png'
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
          <Card imagem={calculadora} titulo='Habitos e Rotina'subtitulo='Desenvolva Hábitos Saudáveis e Construa uma Rotina Vencedora' texto=' Aprenda como implementar hábitos positivos em sua vida diária e descubra como eles podem impulsionar seu progresso no emagrecimento'/>
          <Card imagem={saudavel}  titulo='Alimentação' subtitulo='Nutra seu Corpo e Emagreça com Escolhas Inteligentes' texto='Exploraremos os princípios fundamentais de uma dieta equilibrada, dicas para planejar refeições saudáveis e estratégias para calcular as calorias diariamente.' />
          <Card imagem={motivacao} titulo='Motivação' subtitulo='Mantenha-se Motivado e Conquiste seu Sucesso' texto=' Abordaremos estratégias eficazes para manter o foco, superar a autossabotagem e lidar com desafios emocionais que podem surgir ao longo do caminho'/>
          <Card imagem={halterofilista} titulo='Exercicios' subtitulo='A Importância dos Exercícios na Jornada de Emagrecimento' texto='Vamos abordar diferentes tipos de exercícios, desde atividades cardiovasculares até treinamento de força, e fornecer orientações sobre como incorporá-los à sua rotina.'/>
          </div>
      </div>
    
    </>
  )
}

export default Motivos;
