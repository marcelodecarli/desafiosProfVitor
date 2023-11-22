"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var palavraOculta = '';
var frase = rl.question('Digite uma frase: ').split(' ');
for (var i = 0; i < frase.length; i++) {
    var palavra = frase[i];
    if (palavra != '') {
        palavraOculta = palavraOculta + palavra[0];
    }
}
console.log(palavraOculta);
