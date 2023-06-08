
import BonusCard from '../../components/BonusCard';
import Button from '../../components/Button';
import imgbonusum from '../../img/bonus/imgbonusum.png'
import imgbonusdois from '../../img/bonus/imgbonusdois.png'
import './Bonus.css';


function Bonus() {


  return (

    <div className="fundoBonus">
  
    <h1 className="tituloBonus">Só que ainda tem mais!</h1>
    <h3 className="subtituloBonus">Você também levará:</h3>   

    <BonusCard imagem={imgbonusum} titulo='Sucos Detox'subtitulo='Aprenda a fazer sucos detox deliciosos!' desconto='57,00'valor='00,00'/>
    <BonusCard imagem={imgbonusdois}  titulo='Dieta Guiada'subtitulo='Ebook que irá auxiliar o processo de emagrecimento' desconto='42,00'valor='00,00'/>
    <Button  text='Comprar agora!'></Button>

    </div>

  );
}

export default Bonus;
