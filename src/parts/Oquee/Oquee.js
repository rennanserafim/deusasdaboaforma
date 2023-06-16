
import Button from '../../components/Button';
import imgOquee from '../../img/300x300.png'
import './Oquee.css';

function Oquee() {
    const videoVSL = 'http://via.placeholder.com/300'
  return (

    <div className="fundoOquee">
      <div className="espaco">
    <div className='divImg'>
         <img src={imgOquee} className='vslVideo'></img>
         </div>

    <article className="articleOquee">
    <h1 className="tituloOquee">O que é o Deusas da boa forma?</h1>

    <p class="textoOquee">
    Você sente vergonha do seu peso?
    Tentou fazer várias dietas restritas? Dieta cetogênica, dieta do leite, dieta do ovo...<strong>Mas não teve resultados?</strong>
    Ou ainda, você conseguiu perder alguns quilos, mas em poucas semanas ganhou tudo de novo?
    Você acredita que não existe mais solução pra você a não ser uma cirurgia?
  </p>
  <p class="textoOquee">
    Calma...
    Eu também já tive esses mesmos pensamentos iguais aos seus...
    <strong>Mas, estou aqui pra dizer que há sim uma solução pra você!</strong>
    <br></br>
    Meu nome é Ana. Eu tenho 27 anos e estou aqui para te dar uma ajudinha de mulher para mulher!
    Sou engenheira por formação e trabalho em uma grande multinacional...
    Até o último ano de faculdade, eu sempre consegui manter o meu peso ideal...
    Contudo, quando eu entrei no estágio e comecei a trabalhar em uma grande indústria, a minha vida mudou completamente...
    Eu era responsável por muitas atividades e tinha que liderar equipes...
  </p>
  <p class="textoOquee">
    A carga de trabalho era alta todos os dias. Isso causou uma grande onda de estresse em mim...
    Depois de um ano e meio, eu estava desgastada. O meu organismo tinha se tornado uma bagunça, eu não conseguia dormir direito e dependia do café para atravessar o meu dia...
    Isso ocasionou sérios problemas de saúde, o principal que mais me impactou foi o sobrepeso...
    <strong>ganhei mais de 25Kg!</strong>
    <br></br>
  </p>
  <p class="textoOquee">
    Isso atrapalhou a minha vida de diversas formas. Eu não conseguia me olhar no espelho e ficava com vergonha de ir até para o trabalho, pois nenhuma roupa ficava boa em mim...
  </p>
  <p class="textoOquee">
    O resultado disso tudo foi ser traída pelo homem que eu mais confiei. O olhar dele se tornou frio e eu não tinha forças o suficiente para sustentar a nossa relação...
    Isso me fez um mal terrível...
    Cheguei até a ficar depressiva. Mas, com a ajuda das pessoas que se importavam comigo, eu consegui respirar e dar a volta por cima...
    Eu sabia que não poderia deixar a situação continuar dessa forma. Eu sempre tive o espírito de mulher guerreira!
    Quando consegui me reerguer, eu decidi que era hora de voltar ao meu peso de sempre, só que isso se tornou mais problemático do que eu pensava...
    Eu tentei fazer várias coisas, mas nada teve de fato eficácia. Tentei fazer vários tipos de dietas, fazer diversos exercícios e cheguei ainda a tomar remédios em cápsulas...
    Eu acreditava que não teria solução pra mim, eu teria que fazer uma cirurgia...
    <strong>Mas, a vida me presenteou com uma grande oportunidade!</strong>
  </p>
  <p class="textoOquee">
    Tive o privilégio de fazer uma viagem a trabalho de um ano nos Estados Unidos. Lá, eu fui capaz de conhecer um inovador método de emagrecimento que os americanos estão usando...
    <strong>Depois de seguir esses mesmos hábitos americanos, em apenas 4 semanas, eu fui capaz de perder incríveis 9Kg e 300g!</strong>
  </p>
  <p class="textoOquee">
    Isso trouxe de volta a minha autoestima, a minha confiança, a minha felicidade!
    Chegou a hora de você finalmente emagrecer de forma simples, rápida e segura!
    Imagine só, daqui a um mês você usando aquela antiga roupa favorita no seu armário!
    Ou ainda, imagine o olhar de surpresa que as pessoas ao seu redor vão fazer ao notar a sua transformação!
    A boa notícia é que isso é totalmente possível e você não precisará ir até os Estados Unidos para ter acesso a esse conhecimento...
    não precisará passar horas pesquisando como emagrecer, ou ainda, fazer consultas caras com médicos...
    Tudo que você precisa é apenas do guia: <strong>Deusas da Boa Forma!</strong>
  </p>

    <Button text='Quero comprar'></Button>
    </article>
    </div>
    </div>

  );
}

export default Oquee;
