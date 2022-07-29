var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const n = lines.shift()
let casasBrancas = 0
let casasPretas = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                casasBrancas++
            } else {
                casasPretas++
            }
        } else {
            if (j % 2 == 0) {
                casasPretas++
            } else {
                casasBrancas++
            }
        }
    }
}
console.log(`${casasBrancas} casas brancas e ${casasPretas} casas pretas`);