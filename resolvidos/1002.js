var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())
let area = 3.14159 * Math.pow(a, 2)

console.log(`A=${area.toFixed(4)}`);
