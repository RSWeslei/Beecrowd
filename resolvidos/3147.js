var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [H, E, A, O, W, X] = pegarValores(lines.shift())

if ((H+E+A+X) >= O+W){
  console.log('Middle-earth is safe.');
} else {
  console.log('Sauron has returned.');
}