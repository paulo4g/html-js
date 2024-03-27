const read = require('readline-sync')

var limite = read.questionInt("Digite a data limite: ")
var anoCopa = 1930

  while(anoCopa <= limite) {
    console.log("Teve copa em " + anoCopa)
    anoCopa = anoCopa + 4
  }

  console.log("fim")