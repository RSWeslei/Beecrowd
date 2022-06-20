var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let tempo = Number(lines.shift())
let velocidade = Number(lines.shift())

let litros = (tempo * velocidade) / 12

console.log(litros.toFixed(3));