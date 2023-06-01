
import Button from '../../components/Button';
import imgOquee from '../../img/300x300.png'
import './Oquee.css';

function Oquee() {
    const videoVSL = 'http://via.placeholder.com/300'
  return (

    <div className="fundoOquee">
      <div className="espaco">

    <img src={imgOquee} className='vslVideo'></img>
    <article className="articleOquee">
    <h1 className="tituloOquee">O que é o Deusas da boa forma?</h1>
    <p className="textoOquee">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which o</p>
    <Button text='Quero comprar'></Button>
    </article>
    </div>
    </div>

  );
}

export default Oquee;
