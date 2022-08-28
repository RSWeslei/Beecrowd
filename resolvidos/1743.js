var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const x = lines.shift().split(' ')
const y = lines.shift().split(' ')

let conecta = true
for (let i = 0; i < x.length; i++) {
    if (x[i] == y[i]) {
        conecta = false
        break
    }
}
conecta ? console.log("Y") : console.log("N")