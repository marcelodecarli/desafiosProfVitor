import * as rl from "readline-sync"

let qtdGrenais: number = 0
let vitoriasGremio: number = 0
let vitoriasInter: number = 0
let empates: number = 0
let golsGremio: number = 0
let golsInter: number = 0

let jogos: boolean = true

function goles(golsGremio: number, golsInter: number): void {

    golsGremio = rl.questionInt("Digite quantos gols o imortal fez: ")
    golsInter = rl.questionInt("Digite quantos gols o moranguinho fez: ")

    if (golsGremio > golsInter) {
        console.log(`
    Vencedor: Gremio
    Placar: ${golsGremio} x ${golsInter}
    `)
        vitoriasGremio++
        qtdGrenais++
    } else if (golsGremio < golsInter) {
        console.log(`
        Vencedor: Inter
        Placar: ${golsInter} x ${golsGremio}
        `)
        vitoriasInter++
        qtdGrenais++
    } else {
        console.log(`
        Empatou
        Placar: ${golsInter} x ${golsGremio}
        `)
        empates++
        qtdGrenais++
    }
}


while (jogos == true) {
    console.clear()

    goles(golsGremio, golsInter)

    let continuar: number = rl.questionInt(
        `
        NOVO GRENAL:
        1: SIM
        2: NAO
        `
    )
    if (continuar == 1) {
    } else if (continuar == 2) {
        jogos = false
        if (vitoriasGremio > vitoriasInter) {
            console.log(`
            O Grêmio é o maior vitorioso.
            A quantidade de grenais foi de: ${qtdGrenais}
            Número de vitórias do Inter: ${vitoriasInter}
            Número de vitorias do Grêmio: ${vitoriasGremio}
            Empates: ${empates}
            `)
        } else if (vitoriasGremio < vitoriasInter) {
            console.log(`
            O Inter é o maior vitorioso.
            A quantidade de grenais foi de: ${qtdGrenais}
            Número de vitórias do Inter: ${vitoriasInter}
            Número de vitorias do Grêmio: ${vitoriasGremio}
            Empates: ${empates}
            `)

        } else if (vitoriasGremio == vitoriasInter) {
        console.log(`
        Empatou o número de vitórias.
        A quantidade de grenais foi de: ${qtdGrenais}
        Número de vitórias do Inter: ${vitoriasInter}
        Número de vitorias do Grêmio: ${vitoriasGremio}
        Empates: ${empates}
        `)
    }
    } else {
        console.log('opcao invalida!')
        rl.question('Pressione ENTER para continuar...')

    }
}