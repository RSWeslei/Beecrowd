var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [n, saldo] = pegarValores(lines.shift())
let menor = saldo

for (let i = 0; i < n; i++) {
  let movimentacao = Number(lines.shift())
  saldo += movimentacao
  menor = saldo < menor ? saldo : menor
}
console.log(menor);