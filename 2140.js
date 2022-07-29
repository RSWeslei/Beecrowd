var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [n, m] = pegarValores(lines.shift())

function validar () {
  if (n == 0) {
    return
  }
}
