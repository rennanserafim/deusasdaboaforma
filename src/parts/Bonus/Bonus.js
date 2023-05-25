
import BonusCard from '../../components/BonusCard';
import Button from '../../components/Button';
import imgbonusum from '../../img/bonus/imgbonusum.jpg'
import imgbonusdois from '../../img/bonus/imgbonusdois.jpg'
import './Bonus.css';


function Bonus() {



  return (

    <div className="fundoBonus">
    <h1 className="tituloBonus">Veja o que nossas Deusas falam sobre o método!</h1>
    <h3 className="subtituloBonus">Envie seu feedback para adicionarmos aqui!</h3>   
    <BonusCard imagem={imgbonusum} titulo='Academia'subtitulo='Faça academia' valor='57,00'/>
    <BonusCard imagem={imgbonusdois}  titulo='Receitas'subtitulo='Faça Receitas' valor='42,00'/>
    <Button></Button>

    </div>

  );
}

export default Bonus;
