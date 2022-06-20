var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift())
const pi = 3.14159

console.log(`TRIANGULO: ${(a * c / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(pi * c**2).toFixed(3)}`);
console.log(`TRAPEZIO: ${((a + b) * c / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);