var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [n, k] = pegarValores(lines.shift())
let nomes = []

for (let i = 0; i < n; i++) {
    nomes.push(lines.shift())
}
nomes.sort()
console.log(nomes[k - 1]);