"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var kmPorLitro = 12;
var tempoDeViagem = rl.questionInt("Digite a duração da viagem em horas: ");
var velocidadeMedia = rl.questionInt("Digite a velocidade média durante a viagem: ");
//(tempo * velocidade) / Km por litro
var qtdLitrosNecessaria = (tempoDeViagem * velocidadeMedia) / kmPorLitro;
console.log("A quantidade de litros necess\u00E1ria \u00E9 de: ".concat(qtdLitrosNecessaria, " litros."));
