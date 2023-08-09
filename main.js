var classificacao = document.querySelector('#classificacao');

var txtPeso = (document.querySelector('#peso'));
var txtAltura = (document.querySelector('#altura'));


function classificarImc(imc) {
    if (imc <= 16.9) {
        classificacao.innerHTML = 'Classificação: Muito abaixo do peso';
    } else if (imc <= 18.4) {
        classificacao.innerHTML = 'Classificação: Abaixo do peso';
    } else if (imc <= 24.9) {
        classificacao.innerHTML = 'Classificação: Normal';
    } else if (imc <= 29.9) {
        classificacao.innerHTML = 'Classificação: acima do peso';
    } else if (imc <= 34.9) {
        classificacao.innerHTML = 'Classificação: Obesidade I';
    } else if (imc <= 40) {
        classificacao.innerHTML = 'Classificação: Obesidade II';

    } else {
        classificacao.innerHTML = 'Classificação: Obesidade III';
    }
}

function calcularImc() {
    var peso = txtPeso.value;
    var altura = txtAltura.value;

    if (isNaN(peso) || isNaN(altura)) {
        document.querySelector('#output').innerHTML =
            'Informe seu peso e altura em números, não deixe os espaços vazios.';
    } else {
        imc = parseFloat(peso / (altura * altura)).toFixed(2);
        document.querySelector('#output').innerHTML =
            'Seu IMC: ' + imc;

        classificarImc(imc);
    }
}
