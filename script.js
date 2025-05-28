// Função para mostrar a mensagem surpresa e tocar música
function mostrarMensagem() {
    const surpresa = document.getElementById('surpresa');
    const musica = document.getElementById('musica');

    surpresa.classList.toggle('mostrar');

    if (surpresa.classList.contains('mostrar')) {
        musica.play();
    } else {
        musica.pause();
    }
}

// Máquina de escrever
const texto = "Que seu dia seja cheio de amor, alegria e sorrisos. Eu te amo muito! ❤️";
const mensagem = document.getElementById('mensagem');
let index = 0;

function escrever() {
    if(index < texto.length) {
        mensagem.innerHTML += texto.charAt(index);
        index++;
        setTimeout(escrever, 50);
    }
}
document.addEventListener("DOMContentLoaded", escrever);

// Corações flutuando
function criarCoracoes() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(criarCoracoes, 500);

// Contador de amor desde 29/06/2019
function atualizarContador() {
    const contador = document.getElementById('contadorAmor');
    const dataInicio = new Date('2019-06-29T00:00:00');
    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    contador.innerHTML = `Eu te amo há <b>${dias}</b> dias, <b>${horas}</b> horas, <b>${minutos}</b> minutos e <b>${segundos}</b> segundos.`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
