//Exercicio: Quero saber se a pessoas estar apto a votar ou não?
var idade = 78
console.log(`A sua idade é ${idade} anos`)
if (idade < 16){
    console.log('Não pode votar')
} else if (idade < 18 || idade >= 65){
    console.log('Voto é opcional')
} else {
    console.log('Voto e obrigatorio!')
}