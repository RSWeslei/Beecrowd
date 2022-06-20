var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())

let salary = b * c

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);