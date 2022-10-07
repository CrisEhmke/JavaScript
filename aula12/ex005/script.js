check.addEventListener('click', checar);

//variavel de escopo global
let img = document.createElement('div');

function checar() {
    let anoatual = new Date().getFullYear();
    let anonas = document.querySelector('#ano').value;
    let container = document.querySelector('#container');
    let ilog = document.querySelector('#log');
    let sexo = document.getElementsByTagName('sexo')
    let idade = anoatual - anonas;

    container.appendChild(img);
    img.id = 'image';



    if (anonas == 0 || anonas > anoatual) {
        ilog.innerHTML = 'Data inválida'
    }   