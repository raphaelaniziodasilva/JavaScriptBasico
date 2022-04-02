let valores = [9, 1, 6, 5, 0]
valores.sort()
console.log(valores)

//usando  a estrutura de repetição for in
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}