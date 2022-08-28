var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [a, b, c] = pegarValores(lines.shift())
let qtd = a * c

qtd <= b ? console.log("S") : console.log("N")