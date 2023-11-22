import * as rl from "readline-sync"

const tempoSegundos: number = rl.questionInt("Tempo total em segundos: ")

const horas: number = Math.floor(tempoSegundos/3600)
const minutos: number = Math.floor((tempoSegundos % 3600)/60)
const segundos: number = Math.floor(tempoSegundos % 60)


console.log(`O tempo é ${horas}:${minutos}:${segundos}.`)