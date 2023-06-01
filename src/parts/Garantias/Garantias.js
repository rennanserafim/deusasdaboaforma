import './Garantias.css';
import imgGarantia from '../../img/7DIASGARANTIA.png'
import Button from '../../components/Button';


function Garantias() {


  return (

    <div className="fundoGarantias">
  
    <h1 className="tituloGarantias">Resultado em uma semana, ou o seu dinheiro de volta!</h1>
    <h3 className="subtituloGarantias"></h3> 
    <div className='containerGarantias'>
      <img src={imgGarantia}></img>
      <div>
      <h2>Experimente por 7 dias Sem Risco</h2>  
      <p>Lorem ipsum dolor sit ametcus velit varius vitae. Aenean at est et ipsum viverra vehicula. Nam a lobortis ipsum, vitae gravida magna. Proin quis feugiat odio, vitae pharetra dolor. Proin mollis turpis elit, non tempor quam blandit vitae. Mauris gravida rhoncus justo. Vestibulum suscipit, massa non sagittis volutpat, orci nisl laoreet lectus, non lobortis ipsum massa et eros. Vestibulum vel leo nec lacus aliquam sagittis. Nulla congue nisi odio. Nunc tempor odio nunc, quis laoreet ante lobortis vel. Cras tempus erat tempus, vehicula quam vitae, cursus quam.</p>  
      <Button text='Comprar agora!'/>
      </div>
    
   
    </div>  


    </div>

  );
}

export default Garantias;
