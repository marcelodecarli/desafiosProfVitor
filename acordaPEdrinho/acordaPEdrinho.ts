import * as rl from "readline-sync"

const diaInicial: number = rl.questionInt("Digite o dia inicial do evento: ")
const horaComeco: string = rl.question("Digite a hora que o evento iniciará: (Ex. HH:MM:SS): ")
const diaFinal: number = rl.questionInt("Digite o dia final do evento: ")
const horaFinal: string = rl.question("Digite a hora que o evento finalizará: (Ex. HH:MM:SS): ")

let novaHoraInial: string[] = horaComeco.split(":")
let novaHoraFinal: string[] = horaFinal.split(":")
let horaTotal: number = 0
let minutosTotal: number = parseInt(novaHoraFinal[1]) - parseInt(novaHoraInial[1])
let segundosTotal: number = parseInt(novaHoraFinal[2]) - parseInt(novaHoraInial[2])
 
let duracaoDias: number = diaFinal - diaInicial

if (duracaoDias > 1) {
    horaTotal = (parseInt(novaHoraFinal[0]) - parseInt(novaHoraInial[0]))
}else{
    horaTotal = (parseInt(novaHoraFinal[0]) - parseInt(novaHoraInial[0]))
}

console.log(`
    Dias: ${duracaoDias}
    Horas: ${horaTotal}
    Minutos: ${minutosTotal}
    Segundos: ${segundosTotal}
`)

