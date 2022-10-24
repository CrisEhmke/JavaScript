let enviar = document.querySelector('#enviar').addEventListener('click', adicionar)

let check = document.querySelector('#check')

let number = document.querySelector('#num')



function adicionar(){
    let n = Number(number.value)
    console.log(n)
    if(n == 0 || n > 100 || n == ''){

        
        window.alert('Digite um valor válido!')
    } else{
        window.alert('Tudo certo!')
    }
}