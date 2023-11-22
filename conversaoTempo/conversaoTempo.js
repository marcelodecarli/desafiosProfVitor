"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var tempoSegundos = rl.questionInt("Tempo total em segundos: ");
var horas = Math.floor(tempoSegundos / 3600);
var minutos = Math.floor((tempoSegundos % 3600) / 60);
var segundos = Math.floor(tempoSegundos % 60);
console.log("O tempo \u00E9 ".concat(horas, ":").concat(minutos, ":").concat(segundos, "."));
