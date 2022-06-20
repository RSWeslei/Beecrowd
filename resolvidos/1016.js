var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    
let numero = Number(lines.shift())

console.log(numero * 2 + ' minutos');