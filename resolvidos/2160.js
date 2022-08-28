var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let string = lines.shift()
console.log(string.length > 80 ? 'NO' : 'YES');