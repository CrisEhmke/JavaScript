let enviar = document.querySelector('#enviar').addEventListener('click', tabuada)
let select = document.querySelector('#tab')
let n = document.querySelector('#num')

function tabuada(){
    let num = Number(n.value)
    select.innerHTML = '' //elimina todo o conteudo dentro da tag select
    if(n.value.length == 0){ //pega o valor do comprimento da variavel
        window.alert('Por favor, Digite um valor!')
    } else {
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${c*num}`
            select.appendChild(item) 
        }
    }
}