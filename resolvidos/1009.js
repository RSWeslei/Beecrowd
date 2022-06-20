var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = lines.shift()
let b = Number(lines.shift())
let c = Number(lines.shift())

let salary = b + (c * 0.15)

console.log(`TOTAL = R$ ${salary.toFixed(2)}`);