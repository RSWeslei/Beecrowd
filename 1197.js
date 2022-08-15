var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let line
while (line = lines.shift())
{
  if (!line) break
  let [v, t] = pegarValores(line)
  console.log(2 * (Number(v * t)));
} 