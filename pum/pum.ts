import * as rl from "readline-sync"

let numero: number = rl.questionInt("Digite um valor: ")
let contador: number = 1

for (let i = 0; i < numero; i++) {
    console.log(`${contador} ${contador + 1} ${contador + 2} #PUM`)
    contador = contador + 4
}
