//fazer ligações com o html
let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []  //--> vetor para analizar e gravar dados

//número não pode ser menor que 0 e nem maior que 100
function entre(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

//não vai deixar adicionar o valor pois o valor ja foi adicionado
function adicionado(n, l) {//--> l = lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function cadastrar(){
    if(entre(num.value) && !adicionado(num.value, valores)) { //! = não em js
        //adicionar valores ao meu vetor para ficar gravados
        valores.push(Number(num.value))
        //mostrar valores na tela, criar item
        let item = document.createElement('option')//criou uma tag option no html
        //escrever dentro select
        item.text = `Número ${num.value} adicionado`
        //mostrar valores na tela usando a variavel lista
        lista.appendChild(item)
        //quando o elemento for adicionado vai apagar o número da caixa do formulario
        res.innerHTML = ""

    } else {
        window.alert('valor invalido ou valor ja adicionado')
    }
    //quando o elemento for adicionado vai apagar o número da caixa do formulario
    num.value = ''
    //para deixar o cursor piscando
    num.focus()
}

//analisar dados que estão salvos no vetor
function finalizar(){
    if(valores.length == 0) {// se o vetor estiver vazio
        window.alert('Adicionar valores antes de finalizar')
    } else {
        // para saber quantos elemento tem dentro da minha lista
        let total = valores.length
        //para saber o amior e menor valor
        let maior = valores[0]
        let menor = valores[0]
        //para saber a soma e a media dos valores
        let soma = 0
        let media = 0

        for(let pos in valores) {
            //para saber a soma dos valores
            soma += valores[pos]

            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        //para saber a media dos valores
        media = soma / total


        res.innerHTML = `<p>Temos ${total} valores adicionados</p>`
        res.innerHTML += `<p>Maior valor informado ${maior}</p>`
        res.innerHTML += `<p>Menor valor informado ${menor}</p>`
        res.innerHTML += `<p>A soma entre todos os valores e de ${soma}</p>`
        res.innerHTML += `<p>A media dos valores e ${media}</p>`
    }
    
}