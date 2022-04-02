function tabuada() {
    //fazer ligção com os input 
    let txtn = document.getElementById('txtn')
    let tabu = document.getElementById('tabu')
    //mensagem caso o usuario não preencha todos os campos
    if(txtn.value.length == 0) {
        window.alert('[ERRO] Digite um número')
    } else {
        //criar variavel númerica
        let n = Number(txtn.value)
        //criar estrutura de repetição
        let c = 1
        tabu.innerHTML = ""        

        while(c < 10){
            c ++
            //criar elemento dentro do select
            let item = document.createElement('option')
            //escrever dentro da tabuada
            item.text = `${n} X ${c} = ${n*c}`
            tabu.appendChild(item)
            
        }

    }
}