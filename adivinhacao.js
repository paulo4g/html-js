const read = require('readline-sync')


console.log("Este é um jogo de adivinhação!")
console.log("Tente adivinhar o número secreto")

const number = Math.round(Math.random() * 10)
const chute = read.question("Qual é o número secreto? ")

if (chute == number) {
  console.log("Parabéns, você acertou, o número secreto é: " + number)
} else {
  console.log ("Sinto muito, você não acertou dessa vez. O número secreto era: " + number)
}

