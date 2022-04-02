function contar(){
    //fazer ligações com input e id usando let = variavel
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    //mensagem para preencher todos os dados
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Sem contagem'
    } else {
        res.innerHTML = 'Contando <br>'
        //criar variavel do tipo numerica
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // se o passo for igual a zero ele vai ser considerado 1
        if(p <= 0) {
            window.alert('Psso invalido! Considerando passo 1')
            p = 1
        }
        //contagem cescente 1,2,3 .....
        if (i < f) {
            for(let c = i ; c <= f ; c += p)
            res.innerHTML += ` ${c} \u{1f449}` 
        } else {
            for(let c = i ; c >= f ; c -= p)
            res.innerHTML += ` ${c} \u{1f449}` 
        }

    }


}