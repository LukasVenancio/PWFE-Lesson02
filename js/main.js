'use strict';

import{ iniciarRange } from "./input-range.js"

const validarCampos = () => document.getElementById('formulario').reportValidity();

const calcularImc = (weight, height) => weight / (height * height);

const classificarImc = (imc) => {
    let text;
    if( imc < 18.5){
        text = 'e você está abaixo do peso';
    }else if(imc < 25){
        text = 'e você está com o peso ideal. <span id="parabens">Parabéns!</span>'
    }else if(imc < 30){
        text = 'e você está levemente acima do peso.'
    }else if(imc < 35){
        text = 'e você está com obesidade grau I.'
    }else if(imc < 40){
        text = 'e você está com obesidade grau II.'
    }else{
        text = 'e você está com obesidade grau III. <span id="cuidado">Cuidado!</span>'
    }

    return text;
}

const mostrarResultado = () => {
    
    const name = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const weight = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if(validarCampos()){
        
        const imc = calcularImc(weight, height);

        let text = classificarImc(imc);
        
        result.innerHTML = `${name} seu IMC é: ${imc.toFixed(2)} ${text}`;
        
    }else{
        result.innerHTML = 'Preencha todos os campos!';
    }
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);

iniciarRange('altura');
iniciarRange('peso');