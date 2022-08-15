var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

console.log((2 * 3.14 * Number(input)).toFixed(2))