let enviar = document.querySelector('#enviar').addEventListener('click', adicionar)

let check = document.querySelector('#check').addEventListener('click', checar)

let lista = document.querySelector('#opt')

let res = document.querySelector('#res')

let v = []

function adicionar() {
    let n = Number(document.querySelector('#num').value)
    res.innerHTML = ''

    if (n <= 0 || n > 100 || n.length == '' || v.indexOf(n) != -1) {
        window.alert('Digite um valor válido!')
    } else {
        let opts = document.createElement('option')
        lista.appendChild(opts)
        opts.text += `O número ${n} foi adicionado.`
        v.push(n)
    }
    num.value = ''
    num.focus()
}

function checar() {

    if (v.length == 0) {
        window.alert = `Digite algum valor para finalizar`
    } else {
        v.sort()
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${v.length} números cadastrados</p>`
        let soma = 0

        for (let i of v) {
            soma += i
        }

        let maior = v[v.length - 1]
        let menor = v[0]
        let u = v.length

        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${soma / 2}</p>`
    }


}

