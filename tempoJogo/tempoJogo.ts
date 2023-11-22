import * as rl from "readline-sync"

const horaInicial: number = rl.questionInt('Qual a hora que começou o jogo: ')
const horaFinal: number = rl.questionInt('Qual a hora que terminou o jogo: ')
const tempoTotal: number = horaFinal - horaInicial

if (horaInicial >= 1 && horaFinal <= 24) {
    console.log(`O tempo total de jogo foi de ${tempoTotal} horas.`)
} else if(horaInicial < 1 && horaFinal <= 24) {
    console.log(`Hora inicial menor que 1 hora.`)
}else if(horaInicial >= 1 && horaFinal > 24) {
    console.log(`Hora final maior que 24 horas.`)
}else{
    console.log(`Hora inválida.`)
}

