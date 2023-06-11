
import Button from '../../components/Button';
import './Resumo.css';

function Resumo() {


  return (

    <div className="fundoResumo">
    <h1 className="tituloResumo">Para ter acesso a esse material completo, em condições normais, você teria que investir:</h1>
    <ul className='listResumo'>
      <li>
    <h2 className="subtituloResumo">1-	O guia principal: Deusas da Boa Forma. Avaliado em R$197,00</h2>
    </li>
    <li><h2 className="subtituloResumo">2-	Bônus 1: Sucos Detox. Avaliado em R$ 57,00</h2></li>
    <li><h2 className="subtituloResumo">3-	Bônus 2: Dieta Guiada. Avaliado em R$ 97,00</h2></li>
    </ul>
    <h1 className="tituloResumo">Ou seja, um plano equivalente a R$ 351,00</h1>
    <h1 className="tituloResumo">Mas, nessa promoção especial, você terá acesso a tudo isso...</h1>
    <h1 className="valorResumo">Por apenas 12x de R$ 9,70!</h1>

    <Button text='Compre agora!'/>
    
    </div>
 
  );
}

export default Resumo;
