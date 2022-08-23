var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift())
let nomes = ['Rolien', 'Naej', 'Elehcim', 'Odranoel']

for (let i = 0; i < n; i++) {
  let k = Number(lines.shift())
  for (let j = 0; j < k; j++) {
    let setor = Number(lines.shift())
    console.log(nomes[setor-1]);
  }
}