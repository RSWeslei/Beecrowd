var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let diametro = Number(lines.shift())

let [a, l, p] = pegarValores(lines.shift())

if ((diametro <= a) && (diametro <= l) && (diametro <= p)){
  console.log('S');
} else {
  console.log('N');
}