var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let line
let tipos = []
while (line = lines.shift())
{
  if (!line) break
  if (!tipos.includes(line)){
    tipos.push(line)
  }
}
console.log(tipos.length);