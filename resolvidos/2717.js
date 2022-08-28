var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let minutos = lines.shift()

let [x, y] = pegarValores(lines.shift())

if ((x + y) <= minutos) {
  console.log('Farei hoje!');
} else {
  console.log('Deixa para amanha!');
}