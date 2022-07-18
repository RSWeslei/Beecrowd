var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());
let line

while (line = lines.shift()) {
    if (line.includes('P=NP')) {
        console.log('skipped');
    } else {
        let [a, b] = line.split('+').map(a => Number(a));
        console.log(a + b);
    }
}