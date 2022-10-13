let cont = document.querySelector('#cont')
let reset = document.querySelector('#reset')
let clear = document.querySelectorAll('.clear')
let res = document.querySelector('#res')

clear.forEach((clear) => clear.addEventListener('focus', limpar))//Percorre todos os elementos com a mesma classe e aplica a função pra cada um deles.

cont.addEventListener('click', contar)


function contar(){
    let i = Number (document.querySelector('#ini').value)
    let f = Number (document.querySelector('#fim').value)
    let p = Number (document.querySelector('#pas').value)

    res.innerHTML = 'Contando: '

    if(i == 0 || f == 0 || p == 0 || p > f){
        res.innerHTML = 'Erro! Digite um valor válido... '

    } else
        if(i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} &#10148; `
        }
    } else {
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} &#10148; `
        }
    }
    res.innerHTML += 'Fim!'
    // cont.removeEventListener('click', contar)
}

function limpar(){
    res.innerHTML = ''
    // cont.addEventListener('click', contar)
}