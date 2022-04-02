//Execicio: Quero dar bom dia, boa tarde, boa noite e boa madrugada
//pegando a hora atual 

var agora = new Date()
var horas = agora.getHours()
console.log (`Agora são exatamente ${horas} Horas`)
if (horas >= 1 && horas <= 5) {
    console.log ('Boa madrugada')
} else if (horas >= 6 && horas < 13) {
    console.log ('Bom dia')
} else if (horas < 19) {
    console.log ('Boa tarde')
} else  {
    console.log ('Boa noite')
}
