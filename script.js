'use strict';
const mensagem = document.querySelector('.message');
const pontuacao = document.querySelector('.score');
const maximo = document.querySelector('.highscore');
const numero = document.querySelector('.number');
const input = document.querySelector('.guess');
const botaoVerificar = document.querySelector('.check');
const botaoReiniciar = document.querySelector('.again');

numero.textContent = '9';

botaoVerificar.addEventListener('click', function (){
    if (!input.value) {
        mensagem.textContent = '⛔ Nenhum número!';
    } else if (Number(input.value) == Number(numero.textContent)) {
        mensagem.textContent = '🎉 Número correto!';
        document.body.style.backgroundColor = '#60b347';
    } else if (Number(input.value) > Number(numero.textContent)) {
        mensagem.textContent = '📈 Muito alto!';
    } else if (Number(input.value) < Number(numero.textContent)) {
        mensagem.textContent = '📉 Muito baixo!';
    }
}); 

botaoReiniciar.addEventListener('click', function () {
    numero.textContent = '9';
    mensagem.textContent = 'Comece a adivinhar...';
    document.body.style.backgroundColor = '#090d19';
    input.value = '';
});