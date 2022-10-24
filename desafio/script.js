let enviar = document.querySelector('#enviar').addEventListener('click', adicionar)

let check = document.querySelector('#check')


// let n = Number(document.querySelector('#num').value)

let number = document.querySelector('#num')



function adicionar(){

    n = Number(number.value)
    if(n == 0 || n > 100 || n == ''){
        window.alert('errado')
    } else{
        window.alert('certo')
    }
}