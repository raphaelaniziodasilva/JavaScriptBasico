function verificar() {
    // data atual
    var data = new Date()
    var ano = data.getFullYear()
    //fazendo ligção com input e id
    var txtano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //verificar se o ano esta vazio ou se é maior que o atual
    if (txtano.value.length == 0 || txtano.value > ano) {
        // se o ano nao for digitado aparecera uma mensagem de alerta
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //fazendo ligação do radsex
        var radsex = document.getElementsByName('radsex')
        //calculando a idade
        var idade = ano - Number(txtano.value)
       
        //genero vai estar vazio pois ele sera preenchido depois
        var genero = ''   
        //criar um img
        var img = document.createElement('img')  
        //colocando um id
        img.setAttribute('id', 'foto')      
        //se radsex escolhido for o masculino 
        if (radsex[0].checked) {
            genero = 'Homem' // a variavel genero vai receber uma string

             // usar a logica para saber a idade da criança, jovem, adulto ou idoso
             if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
            
        } else if (radsex[1].checked) { //se radsex escolhido for o feminino
            genero = 'Mulher' // a variavel genero vai receber uma string

            // usar a logica para saber a idade da criança, jovem, adulto ou idoso
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }

        }

            res.innerHTML += `<p>Gênero vai ser <strong>${genero}</strong></p>` 
            res.innerHTML += `<p>idade atual ${idade}</p>`
            res.innerHTML = `Detectado ${genero} com ${idade} anos de idade`
            res.appendChild(img)
        
    }
    
    
}