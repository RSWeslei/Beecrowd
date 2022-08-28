var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [l, d] = pegarValores(lines.shift())
const [k, p] = pegarValores(lines.shift())

let custo = l * k;
let pedagios = Math.floor(l / d);

console.log(pedagios * p + custo);
