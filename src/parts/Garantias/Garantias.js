import './Garantias.css';
import imgGarantia from '../../img/7DIASGARANTIA.png'
import Button from '../../components/Button';


function Garantias() {


  return (

    <div className="fundoGarantias">
      <div className="espacoGarantias">

    <img src={imgGarantia} className='imgGarantia'></img>
    <article className="articleGarantias">
    <h1 className="tituloGarantias">Não decidiu ainda? Eu te ajudo!</h1>
    <h2>Pode ficar tranquila, pois você terá 7 dias de garantia! </h2>
    <p className="textoGarantias">O código de defesa do consumidor (Art.49) garante 7 dias para solicitar reembolso em caso de insatisfação com o produto. Ou seja, você terá 7 dias por minha conta para testar e avaliar o produto. 
Caso você não se identifique com o nosso projeto, você só precisará mandar uma simples mensagem dentro dos 7 dias da garantia que nós iremos devolver totalmente o seu valor investido!
Tem alguma dúvida específica? Fale diretamente conosco através do Whatsapp:
</p>
    <Button text='Chame no Whats'></Button>
    </article>
    </div>
    </div>

  );
}

export default Garantias;
