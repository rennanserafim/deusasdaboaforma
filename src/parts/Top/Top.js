
import './Top.css';

function Top() {
    const videoVSL = 'http://via.placeholder.com/500'
  return (

    <div className="fundoTop">
    <h2 className="subtituloTop">Emagrecimento de forma simples e eficaz</h2>
    <h1 className="tituloTop">Perca mais de 15kgs no primeiro mês!</h1>
    <h2 className="subtituloTop">Mais de 500 mulheres já aprovaram o método</h2>
    <div  className="imgTop">
    <img src={videoVSL} className="imgTopDiv"></img>
    </div>
    </div>
 
  );
}

export default Top;
