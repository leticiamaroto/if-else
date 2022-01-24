let idade = 18;
if (idade >= 18){
    console.log("Você é maior de idade")
}
let souHumano = true;
if (idade >= 18 && souHumano == true){
    console.log("Você é humano e maior de idade")
}else{
    console.log("Você não é maior de idade ou humano")
}

let aniversario = "dezembro"
if(aniversario == "janeiro" || aniversario == "dezembro"){
    console.log("Você faz aniversário em janeiro ou dezembro")
}else{
    console.log("Não é seu aniversário!")
}

let nome = "Raissa";
if(nome.substring(0,1) == "R"){
    console.log("Seu nome começa com a letra R")
}else{
    console.log("Seu nome não começa com a letra R")
}
let name = "Luna"
let surname = "Barbosa"
if(surname.length> 6 || name.substring(0,1) == "E" || "e" ){
    console.log("Seu sobrenome é maior que seis letras ou seu nome começa com a letra E")
}else {
    console.log("Seu sobrenome é menor que seis letras ou seu nome não começa com a letra E")
}