let cont = document.querySelector('#cont')




cont.onclick = function(){
    let inicio = Number (document.querySelector('#ini').value)
    let final = Number (document.querySelector('#fim').value)
    let passo = Number (document.querySelector('#pas').value)
    let res = document.querySelector('#res')

    
        for(let c = inicio; c <= final; c = c + passo){
            res.innerHTML += `${c}`
        }
    

}