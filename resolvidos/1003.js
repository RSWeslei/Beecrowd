var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())
let b = Number(lines.shift())

console.log(`SOMA = ${a + b}`);