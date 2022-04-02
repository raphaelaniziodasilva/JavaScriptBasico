//criando vetor
let num = [7, 3, 8]
//acrecentar um vetor indicando a sua posição
num[3]= 6
//acrecentar um vetor sem se preocoar com a posição 
num.push(0)
//colocar os vetores em ordem
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor ${num[2]} `)

//para buscar valor dentro de um vetor para mostra a sua posição
console.log(`O número 6 esta na posição ${num.indexOf(6)}`)
//quando o número não for encontrado retorna com -1
console.log(`O número 6 esta na posição ${num.indexOf(2)}`)

// em vez de aparecer -1 eu quero que apareça uma mensagem avisando
let pos = num.indexOf(7)
if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}