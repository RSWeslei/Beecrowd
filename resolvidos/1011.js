var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift())
let volume = 4/3 * 3.14159 * Math.pow(a, 3)  

console.log(`VOLUME = ${volume.toFixed(3)}`)