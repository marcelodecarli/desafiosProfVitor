"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var numero = rl.questionInt("Digite um valor: ");
var contador = 1;
for (var i = 0; i < numero; i++) {
    console.log("".concat(contador, " ").concat(contador + 1, " ").concat(contador + 2, " #PUM"));
    contador = contador + 4;
}
