var numBatalhas = 3;
var batalhas = ['DCOOO', 'DODOCD', 'COD'];
var vitorias = 0;
for (var i = 0; i < batalhas.length; i++) {
    var encontrouChainsOfIce = false;
    var encontrouDeathGrip = false;
    var venceuBatalha = true;
    for (var j = 0; j < batalhas[i].length; j++) {
        var movimento = batalhas[i][j];
        var encontrouDeathGrip_1 = true;
        if (movimento === 'CO') {
            encontrouChainsOfIce = true;
            venceuBatalha = true;
        }
        else if (movimento === 'CD') {
            venceuBatalha = false;
        }
        else if (movimento === 'D') {
            venceuBatalha = false;
        }
        else if (movimento === 'O') {
            venceuBatalha = false;
        }
    }
    vitorias++;
}
console.log(vitorias);
