var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [n, x] = pegarValores(lines.shift())

console.log((x / (n + 2)).toFixed(2));