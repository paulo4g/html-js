var vitorias = parseInt(prompt("Entre com o número de vitórias."))
var empates = parseInt(prompt("Entre com o número de empates."))
var pontos = (vitorias * 3) + empates

console.log("Os pontos do seu time é " + pontos)

if(pontos > 28) {
  console.log("Seu time está melhor do que o ano passado.")
}

if(pontos < 28) {
  console.log("Seu time está pior do que o ano passado.")
}

if (pontos == 28) {
  console.log("Seu time está igual do que o ano passado.")
}
