import React, { useState } from 'react';
import './Imc.css';

function Imc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2));
    } else {
      setResultado('');
    }
  };

  return (
    <div className='fundoImc'>
      <h1>Calcule seu IMC e veja se o Deusas da boa forma é para você?</h1>
      <div className='calculadoraImc'>
      <label className='labelImc'>
        Peso: 
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <label className='labelImc'>
        Altura: 
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <p className='labelImc'>IMC: {resultado}</p>
      <button onClick={calcularIMC} className='labelImc'>Calcular</button>
      </div>
    </div>
  );
}

export default Imc;
