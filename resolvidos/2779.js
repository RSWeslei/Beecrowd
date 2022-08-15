var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let espacos = lines.shift()
let n = lines.shift()

let repetidas = []

for (let i = 0; i < n; i++) {
  let fig = lines.shift()
  if (!repetidas.includes(fig)){
    repetidas.push(fig)
  }
}

console.log(espacos - repetidas.length);