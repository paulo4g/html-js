const read = require('readline-sync')

console.clear()


function calculaImc(altura, peso) {
  return peso / (altura * altura)
}
var nome = read.question("Qual é o seu nome? ")
var altura = read.questionInt("Qual é a sua altura? ")
var peso = read.questionInt("Qual é o seu peso? ")

var imc = calculaImc(altura, peso)

if (imc < 18.5) {
  console.log("Você está abaixo do recomendado")
}
if (imc > 35) {
  console.log("Você está acima do recomendado")
}
if(imc>= 18) {
  if(imc < 35) {
    console.log("Você está com o IMC ideal, parabéns")
  }
}

console.log(nome + ", o seu IMC é: " + imc)