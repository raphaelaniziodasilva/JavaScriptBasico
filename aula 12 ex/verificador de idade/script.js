function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //fazer ligação com input e id
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    res.innerHTML = `Ano atual ${ano}`

    //verificar se o ano esta vazio ou se e maior que o atual
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else { // agora que os dados ja fora preenchidos agora fazer ligação com radsex
        var fsex = document.getElementsByName('radsex')
        //calcular a idade
        var idade = ano - Number(fano.value)
       

        //criar variavel genero que vai estar em branco vazia pois vai receber o valor mais para frente
        var genero = ''
        //criando um img no html pelo javascript
        var img = document.createElement('img')
        //cirando um id para o img
        img.setAttribute('id', 'foto')
        //se o que tiver marcado for fsex[0] vai ser masculino
        if (fsex[0].checked) {
            genero = 'Homem' //a variavel genero vazia agora vai receber uma string
            //vamos verificar idade para criança, jovem, adulto e idoso
            if (idade >= 0 && idade < 10) {
                //criança / colocar foto
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) { 
                //jovem / colocar foto
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //adulto / colocar foto
                img.setAttribute('src', 'homem.jpg')
            } else {
                 //idoso / colocar foto
                 img.setAttribute('src', 'idoso-m.jpg')
            }


          //se o que tiver marcado for fsex[1] vai ser feminino
        } else if (fsex[1].checked) {
            genero = 'Mulher' //a variavel genero vazia agora vai receber uma string
            //vamos verificar idade para criança, jovem, adulto e idoso
            if (idade >= 0 && idade < 10) {
                //criança / colocar foto
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) { 
                //jovem / colocar foto
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //adulto / colocar foto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                 //idoso / colocar foto
                 img.setAttribute('src', 'idoso-f.jpg')
            }
        }

        res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        res.appendChild(img)


    }
    

}