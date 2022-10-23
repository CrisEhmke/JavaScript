let num = [2, 9, 5, 3, 6]


num[3] = 8 //Adiciona o número 8 na posição 3
num.push(1) //Adiciona o número 1 na última posição
num.sort() // Coloca os números em ordem

console.log(`${num}`)
console.log(`Você tem ${num.length} posições`)
console.log(`O primeiro número é o ${num[0]}`)

let pos = num.indexOf(2)

if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor está na posição ${pos}`)
}
