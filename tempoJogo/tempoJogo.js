"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var horaInicial = rl.questionInt('Qual a hora que começou o jogo: ');
var horaFinal = rl.questionInt('Qual a hora que terminou o jogo: ');
var tempoTotal = horaFinal - horaInicial;
if (horaInicial >= 1 && horaFinal <= 24) {
    console.log("O tempo total de jogo foi de ".concat(tempoTotal, " horas."));
}
else if (horaInicial < 1 && horaFinal <= 24) {
    console.log("Hora inicial menor que 1 hora.");
}
else if (horaInicial >= 1 && horaFinal > 24) {
    console.log("Hora final maior que 24 horas.");
}
else {
    console.log("Hora inv\u00E1lida.");
}
