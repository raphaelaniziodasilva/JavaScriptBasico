function carregar(){
//fazendo ligações com id html
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
//criando variavel para hora
var agora = new Date()
var horas = agora.getHours()
msg.innerHTML = `São exatamente <strong>${horas} horas</strong>`
//fazendo a logica de programação
if (horas >= 1 && horas < 13){
    //mensagem bom dia
    msg.innerHTML += '<p>Bom dia</p>'
    //vai trocar a imagem
    imagem.src = 'dia.jpg'
    //vai trocar a cor do body
    document.body.style.background = 'green'
} else if (horas >= 13 && horas < 19) {
     //mensagem boa tarde
     msg.innerHTML += '<p>Boa tarde</p>'
     //vai trocar a imagem
     imagem.src = 'tarde.jpg'
     //vai trocar a cor do body
     document.body.style.background = 'brown'
} else {
     //mensagem boa noite
     msg.innerHTML += '<p>Boa noite</p>'
     //vai trocar a imagem
     imagem.src = 'noite.jpg'
     //vai trocar a cor do body
     document.body.style.background = 'black'
}
}
