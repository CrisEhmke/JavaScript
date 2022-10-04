setInterval(carregar, 1000);

function carregar() {

    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let change = document.querySelector('p#time');
    let img = document.querySelector('div#image');

    if (hora >= 6 && hora <= 12 && minutos <= 59) {
        change.innerHTML = `Bom dia! São ${hora}:${minutos}:${sec}`
        img.style.backgroundImage = 'url(imagens/dia.jpg)'
        document.body.style.backgroundColor = '#5869ff'
    } else
        if (hora > 12 && hora < 18) {
            change.innerHTML = `Boa tarde! São ${hora}:${minutos}:${sec}`
            img.style.backgroundImage = 'url(imagens/tarde.jpg)'
            document.body.style.backgroundColor = '#f4b886'
        } else {
            change.innerHTML = `Boa noite! São ${hora}:${minutos}:${sec}`
            img.style.backgroundImage = 'url(imagens/noite.jpg)'
            document.body.style.backgroundColor = '#152129'
        }
} 
