import React, { useState } from 'react';
import './Imc.css';
import Button from '../../components/Button';
import Share from '../../components/Share/Share';

function Imc() {
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [resultado, setResultado] = useState('');
const [mostrarIMC, setMostrarIMC] = useState(false);
const [mostrarBotaoRefazer, setMostrarBotaoRefazer] = useState(false);

const calcularIMC = () => {
if (peso && altura) {
const imc = peso / (altura * altura);
setResultado(imc.toFixed(2));
setMostrarIMC(true);
setMostrarBotaoRefazer(true);
} else {
setResultado('');
setMostrarIMC(false);
setMostrarBotaoRefazer(false);
}


setPeso('');
setAltura('');
};

const refazerCalculo = () => {
setResultado('');
setMostrarIMC(false);
setMostrarBotaoRefazer(false);
};

let mensagem = '';
let mostrarShare = false;
let mostrarButton = false;
if (resultado < 18.5) {
mensagem = 'Você está no peso, o Deusas não é pra você.';
mostrarShare = true;
mostrarButton = false;
} else if (resultado >= 18.5) {
mensagem = 'Você deve adquirir o Deusas';
mostrarShare = false;
mostrarButton = true;


}

return (
<div className='fundoImc'>
<h1>Calcule seu IMC e veja se o Deusas da boa forma é para você?</h1>
<div className='calculadoraImc'>
<label className='labelImc'>
Peso:
<input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />kgs
</label>
<label className='labelImc'>
Altura:
<input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />m
</label>
{mostrarIMC && <h2 className='labelImc'>IMC: {resultado}</h2>}
{mostrarBotaoRefazer ? (
<div>
<button onClick={refazerCalculo} className='buttonImc'>Refazer Cálculo</button>
</div>
) : (
<button onClick={calcularIMC} className='buttonImc'>Calcular IMC</button>
)}
{resultado && (
<div className='resultadoImc'>
<h1>{mensagem}</h1>
{mostrarShare && <Share />}
{mostrarButton && <Button text='Compre agora com desconto!'/>}
</div>
)}
</div>
</div>
);
}

export default Imc;