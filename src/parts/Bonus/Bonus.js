
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

    <BonusCard imagem='http://via.placeholder.com/300' titulo='Bonus 1'subtitulo='Faça academia' desconto='57,00'valor='00,00'/>
    <BonusCard imagem='http://via.placeholder.com/300'  titulo='Bonus 2'subtitulo='Faça Receitas' desconto='42,00'valor='00,00'/>
    <Button  text='Comprar agora!'></Button>

    </div>

  );
}

export default Bonus;
