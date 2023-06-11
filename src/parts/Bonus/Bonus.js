
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

    <BonusCard imagem={imgbonusum} titulo='Quer desinchar hoje mesmo? Que tal fazer um belo suco detox e aliviar o seu organismo?'subtitulo='Através da nossa vida alimentar, nós vamos ingerindo muitas substâncias negativas que o nosso organismo não sabe lidar... elas acabam ficando presas e entupindo as nossas artérias, piorando a nossa saúde intestinal e causando doenças...
Mas, através do bônus: sucos detox, você poderá eliminar isso de uma vez por todas e se sentir mais leve ainda hoje! ' desconto='57,00'valor='57,00'/>
    <BonusCard imagem={imgbonusdois}  titulo='Não se preocupe, você não precisará perder tempo tentando entender o que você pode comer ou não... 'subtitulo='Esse bônus trará para você um planejamento de alimentação completo e detalhado baseado nas suas necessidades! No guia principal, você entenderá qual é a sua taxa metabólica de queima hormonal. Sabendo disso, você só precisará ter seu plano de alimentação em mãos e colocar em prática!' desconto='42,00'valor='97,00'/>

    </div>

  );
}

export default Bonus;
