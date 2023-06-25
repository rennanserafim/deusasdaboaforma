import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Share from './components/Share/Share';

import Bonus from './parts/Bonus/Bonus';
import Depoimentos from './parts/Depoimentos/Depoimentos';
import Faq from './parts/Faq/Faq';
import Garantias from './parts/Garantias/Garantias';

import Imc from './parts/Imc/Imc';
import Motivos from './parts/Motivos/Motivos';

import Oquee from './parts/Oquee/Oquee';
import Resumo from './parts/Resumo/Resumo';
import Top from './parts/Top/Top';

function AppSecond() {
  return (

      <>
        <Top />
        <Oquee />
        <Motivos />
        <Imc />
        <Depoimentos />

        <Garantias />
        <Bonus />
        <Resumo />
        <Faq />

      </>

  );
}

export default AppSecond;
