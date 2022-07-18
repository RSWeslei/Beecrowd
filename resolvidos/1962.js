var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
const [alturaPulo, n] = pegarValores(lines.shift())

let alturas = pegarValores(lines.shift())

let lose = false
for (let i = 0; i < n; i++) {
    if (i == n-1) break
    if (Math.abs(alturas[i+1] - alturas[i]) > alturaPulo){
        lose = true
        break
    }
}
lose ? console.log("GAME OVER") : console.log("YOU WIN");