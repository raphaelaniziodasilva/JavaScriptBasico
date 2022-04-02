function contar() {
    //fazer ligação com input e id
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('res')
    //preencha todos os dados ou aparecera mensagem de erro
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos')
    } else {
        res.innerHTML = 'Contando: '
        //criar variaveis do tipo númerica
        var inicio = Number(txti.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)
        // estrutura de repetição com teste logico no final
        var contar = inicio
        do {
            res.innerHTML += `${contar} `
            contar += passo
        } while(contar <= fim)
        
    }


}