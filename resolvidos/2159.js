var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let n = lines.shift()

const minino = n / Math.log(n)
const maximo = 1.25506 * (n / Math.log(n))

console.log(`${minino.toFixed(1)} ${maximo.toFixed(1)}`);