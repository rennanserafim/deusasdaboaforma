
import './BonusCard.css';

function  BonusCard({imagem,titulo,subtitulo,valor}) {
  return(
    <>
    <div className='fundoBonusCard'>
     <div className='containerBonusCard'>

      <img src={imagem}  className='imagemCard'></img>
    </div>
   
    <h1 className="tituloBonusCard">{titulo}</h1>
    <h3 className="subtituloBonusCard">{subtitulo}</h3>
    <h2 className="valorBonusCard">R$ {valor}</h2>
    </div>
    </>
    )
}

export default BonusCard