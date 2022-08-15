var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let line = lines.shift()

let [x, y] = line.split('.')

console.log(`${Number(y)}.${Number(x)}`);