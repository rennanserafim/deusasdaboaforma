
import './App.css';
import Countdown from './components/Countdown/Countdown';
import Share from './components/Share/Share';

import Bonus from './parts/Bonus/Bonus';
import Depoimentos from './parts/Depoimentos/Depoimentos';
import Faq from './parts/Faq/Faq';
import Finish from './parts/Finish/Finish';
import Garantias from './parts/Garantias/Garantias';

import Imc from './parts/Imc/Imc';
import Motivos from './parts/Motivos/Motivos';


import Oquee from './parts/Oquee/Oquee';
import Resumo from './parts/Resumo/Resumo';
import Top from './parts/Top/Top';


function App() {

  return (
    <>
  <Top/>
  <Oquee/>
  <Motivos/>
  <Imc/>
  <Depoimentos/>
  {/* <Countdown/> */}


  <Garantias/>
  <Bonus/>
  <Resumo/>
  <Faq/>
  <Finish/>

  



   </>
  );
}

export default App;
