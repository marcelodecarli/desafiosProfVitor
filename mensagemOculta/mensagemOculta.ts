import * as rl from "readline-sync"

let palavraOculta: string = '';

const frase: string[] = rl.question('Digite uma frase: ').split(' ')

for (let i = 0; i < frase.length; i++) {
    const palavra: string = frase[i];
    if (palavra != '') {
        palavraOculta = palavraOculta + palavra[0]
    }
}

console.log(palavraOculta)