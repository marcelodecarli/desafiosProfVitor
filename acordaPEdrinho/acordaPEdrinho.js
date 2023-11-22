"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var diaInicial = rl.questionInt("Digite o dia inicial do evento: ");
var horaComeco = rl.question("Digite a hora que o evento iniciará: (Ex. HH:MM:SS): ");
var diaFinal = rl.questionInt("Digite o dia final do evento: ");
var horaFinal = rl.question("Digite a hora que o evento finalizará: (Ex. HH:MM:SS): ");
var novaHoraInial = horaComeco.split(":");
var novaHoraFinal = horaFinal.split(":");
var horaTotal = 0;
var minutosTotal = parseInt(novaHoraFinal[1]) - parseInt(novaHoraInial[1]);
var segundosTotal = parseInt(novaHoraFinal[2]) - parseInt(novaHoraInial[2]);
var duracaoDias = diaFinal - diaInicial;
if (duracaoDias > 1) {
    horaTotal = (parseInt(novaHoraFinal[0]) - parseInt(novaHoraInial[0]));
}
else {
    horaTotal = (parseInt(novaHoraFinal[0]) - parseInt(novaHoraInial[0]));
}
console.log("\n    Dias: ".concat(duracaoDias, "\n    Horas: ").concat(horaTotal, "\n    Minutos: ").concat(minutosTotal, "\n    Segundos: ").concat(segundosTotal, "\n"));
