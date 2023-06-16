
import Button from '../../components/Button';

import './Top.css';

function Top() {


  return (

    <div className="fundoTop">
    <h2 className="subtituloTop">Mulher finalmente revela segredo inédito que usou para perder 9Kg e 300g em apenas 4 semanas de forma natural seguindo apenas alguns hábitos americanos!</h2>
    <h1 className="tituloTop">Sem passar fome com dietas, sem se matar na academia e sem remédios...</h1>
    <h2 className="subtituloTop">Veja o video abaixo:</h2>
    <div  className="imgTop">
     <iframe src="https://player.vimeo.com/video/833068874?byline=0&portrait=0&" width="1366" height="768" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Deusas da Boa Forma"></iframe>
    </div>

    <div className='divButton'>
      <Button text='Compre agora!'/>
      </div>

    </div>
 
  );
}

export default Top;
