var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift())
let maior = (a + b + Math.abs(a-b)) / 2
maior = (maior + c + Math.abs(maior - c)) / 2

console.log(`${maior} eh o maior`);