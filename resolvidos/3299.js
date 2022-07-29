var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let valor = lines.shift()

if (valor.includes('13')){
    console.log(`${valor} es de Mala Suerte`);
}
else {
    console.log(`${valor} NO es de Mala Suerte`);
}