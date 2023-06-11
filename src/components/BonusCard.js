
import './BonusCard.css';

function  BonusCard({imagem,titulo,desconto,subtitulo,valor}) {
  return(
    <>
    <div className='fundoBonusCard'>
     <div className='containerBonusCard'>

      <img src={imagem}  className='imagemCard'></img>
    </div>
   <div className='containerBonusCardText'>
    <h1 className="tituloBonusCard">{titulo}</h1>
    <h3 className="subtituloBonusCard">{subtitulo}</h3>
    <h3 className="valorBonusCard"><strong>Avaliado em R${valor}</strong></h3>
    </div>
    </div>
    </>
    )
}

export default BonusCard