const carousel = 
document.getElementById('carousel');

const imagens = 
carousel.querySelectorAll('img');

const anteriorBtn = 
document.getElementById('anterior');

const proximoBtn =
document.getElementById('proximo');

let indiceAtual = 0;

function mostrarimagem(indice) {
    imagens.forEach((imagem, i) => {
        if (i === indice) {
            imagem.style.display = 'block';
        } else {
            imagem.style.display = 'none';
        }
    });
    
}

function avancarimagem() {
    indiceAtual = (indiceAtual + 1 ) % 
    imagens.length;
    mostrarimagem(indiceAtual);
}

function retrocederimgagem() {
    indiceAtual = (indiceAtual - 1 + imagens.length) %
    imagens.length;
    mostrarimagem(indiceAtual);
}

proximoBtn.addEventListener('click', avancarimagem);
anteriorBtn.addEventListener('click', retrocederimgagem);

mostrarimagem(indiceAtual)

const delayTrocaAutomatica = 6000;

setInterval(avancarimagem,delayTrocaAutomatica)