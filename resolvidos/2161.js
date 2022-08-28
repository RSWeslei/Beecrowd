var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = lines.shift()

console.log((3+(1/(6+1/6))).toFixed(10));