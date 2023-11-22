import * as rl from "readline-sync"

const kmPorLitro: number = 12
const tempoDeViagem: number = rl.questionInt("Digite a duração da viagem em horas: ")
const velocidadeMedia: number = rl.questionInt("Digite a velocidade média durante a viagem: ")

//(tempo * velocidade) / Km por litro

const qtdLitrosNecessaria: number = (tempoDeViagem * velocidadeMedia) / kmPorLitro

console.log(`A quantidade de litros necessária é de: ${qtdLitrosNecessaria.toFixed(3)} litros.`)