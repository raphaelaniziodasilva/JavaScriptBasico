//fazer ligação com html
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
//o numero não pode ser menor que 0 e nem maior que 100
function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//não vai deixar adicionar o valor pois ele ja foi adicionado
function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        //adicionar valores ao vetor para ficar gravados
        valores.push(Number(num.value))
        //mostrar valores na tela do select, criar item
        let item = document.createElement('option') //foi criado uma tag option dentro do html
        //eacrever na tela do select
        item.text = `Valor ${num.value} adicionado`
        //mostrar o item na tela usando a variavel lista
        lista.appendChild(item)
        //quano o elemento for adicionado o curso terar que limpar o numero ja adicionado
        res.innerHTML = ''        
    } else {
        window.alert('Valor invalido ou valor ja enconrado')
    }
    //quano o elemento for adicionado o curso terar que limpar o numero ja adicionado
    num.value = ''
    //para deixar o cursor piscando na tela
    num.focus()
}

//agora vamos analizar os dados gravados no vetor
function finalizar() {
    //caso nenhum valor for adicionado ao vetor
    if(valores.length == 0) {
        window.alert('Adicionar valores antes de fnalizar')
    } else {
        //para saber quantos elementos o vetor
        let tot = valores.length
        //para saber o maior e menor valor
        let maior = valores[0]
        let menor = valores[0]
        //para saber a soma de todos os valores e media
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = `<p>Ao todo temos ${tot} numeros adicionados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores ${soma}</p>`
        res.innerHTML += `A media dos valores ${media}`
    }
}
