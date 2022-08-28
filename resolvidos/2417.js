var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [cv, ce, cs, fv, fe, fs] = pegarValores(lines.shift())

let pontosC=0
let pontosF=0

pontosC += cv * 3
pontosC += ce * 1
pontosF += fv * 3
pontosF += fe * 1

if (pontosC == pontosF){
    (cs > fs) ? console.log('C') : (cs < fs) ? console.log('F') : console.log('=');
} else {
    pontosC > pontosF ? console.log('C') : console.log('F');
}
