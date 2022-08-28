var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

while (true)
{
    let [h1, m1, h2, m2] = pegarValores(lines.shift())
    if (h1 == 0 && m1 == 0 && h2 == 0 && m2 == 0) break
    let minutos = (h2 * 60 + m2) - (h1 * 60 + m1)
    if (minutos < 0) minutos += 1440
    console.log(minutos)
}