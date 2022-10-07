check.addEventListener('click', checar);

//variavel de escopo global
let img = document.createElement('div');

function checar() {
    let anoatual = new Date().getFullYear();
    let anonas = document.querySelector('#ano').value;
    let container = document.querySelector('#container');
    let ilog = document.querySelector('#log');
    let sexo = document.getElementsByName('sexo');
    let idade = anoatual - anonas;

    container.appendChild(img);
    img.id = 'image';

    if (anonas == 0 || anonas > anoatual) {
        ilog.innerHTML = 'Data inválida!'
        img.style.background = '#fff none'
    } else
        if (sexo[0].checked) {
            ilog.innerHTML = `Aqui temos um homem de ${idade} anos`
            if (idade >= 0 && idade < 10) {
                img.style.backgroundImage = 'url(imagens/menino.jpg)'
            } else
                if (idade < 21) {
                    img.style.backgroundImage = "url(imagens/rapaz.jpg"
                } else
                    if (idade < 50) {
                        img.style.backgroundImage = 'url(imagens/homem.jpg)'
                    } else {
                        img.style.backgroundImage = 'url(imagens/idoso.jpg)'
                    }
        }

    if (anonas == 0 || anonas > anoatual) {
        ilog.innerHTML = 'Data inválida!'
        img.style.background = '#fff none'
    } else
        if (sexo[1].checked) {
            ilog.innerHTML = `Aqui temos uma mulher de ${idade} anos`
            if (idade >= 0 && idade < 10) {
                img.style.backgroundImage = 'url(imagens/menina.jpg)'
            } else
                if (idade < 21) {
                    img.style.backgroundImage = 'url(imagens/moça.jpg)'
                } else
                    if (idade < 50) {
                        img.style.backgroundImage = 'url(imagens/mulher.jpg)'
                    } else {
                        img.style.backgroundImage = 'url(imagens/idosa.jpg)'
                    }
        }

}