
let numBatalhas: number = 3
const batalhas: string[] = ['DCOOO', 'DODOCD', 'COD'];
let vitorias = 0;


for (let i = 0; i < batalhas.length; i++) {
    let encontrouChainsOfIce = false;
    let encontrouDeathGrip = false;
    let venceuBatalha = true;

    for (let j = 0; j < batalhas[i].length; j++) {
        const movimento = batalhas[i][j];
        let encontrouDeathGrip = true
        if (movimento === 'CO') {
            encontrouChainsOfIce = true;
            venceuBatalha = true
        } else if (movimento === 'CD') {
            venceuBatalha = false;
        } else if (movimento === 'D') {
            venceuBatalha = false;
        } else if (movimento === 'O') {
            venceuBatalha = false;
        }
    }
    vitorias++
}

console.log(vitorias);
