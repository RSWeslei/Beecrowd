var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let valor = 0
for (let i = 0; i < 2; i++) {
    [a, b, c] = pegarValores(lines[i])
    valor += b * c
}
console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)