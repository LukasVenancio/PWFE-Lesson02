'use strict';

function validarCampos(name, height, weight){
    return document.getElementById('formulario').reportValidity();
}

function calcularImc(weight, height){
    return weight / (height * height);
}

function classificarImc(imc){
    let text;
    if( imc < 18.5){
        text = 'e você está abaixo do peso';
    }else if(imc < 25){
        text = 'e você está com o peso ideal. Parabéns!'
    }else if(imc < 30){
        text = 'e você está levemente acima do peso.'
    }else if(imc < 35){
        text = 'e você está com obesidade grau I.'
    }else if(imc < 40){
        text = 'e você está com obesidade grau II.'
    }else{
        text = 'e você está com obesidade grau III. Cuidado!'
    }

    return text;
}

function mostrarResultado(){
    
    const name = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const weight = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if(validarCampos()){
        
        const imc = calcularImc(weight, height);

        let text = classificarImc(imc);
        
        result.textContent = `${name} seu IMC é: ${imc.toFixed(2)} ${text}`;
        
    }else{
        result.textContent = 'Preencha todos os campos!';
    }
}

var slider = document.getElementById("altura");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);