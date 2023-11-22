"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var qtdGrenais = 0;
var vitoriasGremio = 0;
var vitoriasInter = 0;
var empates = 0;
var golsGremio = 0;
var golsInter = 0;
var jogos = true;
function goles(golsGremio, golsInter) {
    golsGremio = rl.questionInt("Digite quantos gols o imortal fez: ");
    golsInter = rl.questionInt("Digite quantos gols o moranguinho fez: ");
    if (golsGremio > golsInter) {
        console.log("\n    Vencedor: Gremio\n    Placar: ".concat(golsGremio, " x ").concat(golsInter, "\n    "));
        vitoriasGremio++;
        qtdGrenais++;
    }
    else if (golsGremio < golsInter) {
        console.log("\n        Vencedor: Inter\n        Placar: ".concat(golsInter, " x ").concat(golsGremio, "\n        "));
        vitoriasInter++;
        qtdGrenais++;
    }
    else {
        console.log("\n        Empatou\n        Placar: ".concat(golsInter, " x ").concat(golsGremio, "\n        "));
        empates++;
        qtdGrenais++;
    }
}
while (jogos == true) {
    console.clear();
    goles(golsGremio, golsInter);
    var continuar = rl.questionInt("\n        NOVO GRENAL:\n        1: SIM\n        2: NAO\n        ");
    if (continuar == 1) {
    }
    else if (continuar == 2) {
        jogos = false;
        if (vitoriasGremio > vitoriasInter) {
            console.log("\n            O Gr\u00EAmio \u00E9 o maior vitorioso.\n            A quantidade de grenais foi de: ".concat(qtdGrenais, "\n            N\u00FAmero de vit\u00F3rias do Inter: ").concat(vitoriasInter, "\n            N\u00FAmero de vitorias do Gr\u00EAmio: ").concat(vitoriasGremio, "\n            Empates: ").concat(empates, "\n            "));
        }
        else if (vitoriasGremio < vitoriasInter) {
            console.log("\n            O Inter \u00E9 o maior vitorioso.\n            A quantidade de grenais foi de: ".concat(qtdGrenais, "\n            N\u00FAmero de vit\u00F3rias do Inter: ").concat(vitoriasInter, "\n            N\u00FAmero de vitorias do Gr\u00EAmio: ").concat(vitoriasGremio, "\n            Empates: ").concat(empates, "\n            "));
        }
        else if (vitoriasGremio == vitoriasInter) {
            console.log("\n        Empatou o n\u00FAmero de vit\u00F3rias.\n        A quantidade de grenais foi de: ".concat(qtdGrenais, "\n        N\u00FAmero de vit\u00F3rias do Inter: ").concat(vitoriasInter, "\n        N\u00FAmero de vitorias do Gr\u00EAmio: ").concat(vitoriasGremio, "\n        Empates: ").concat(empates, "\n        "));
        }
    }
    else {
        console.log('opcao invalida!');
        rl.question('Pressione ENTER para continuar...');
    }
}
