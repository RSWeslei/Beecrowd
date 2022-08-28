var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let valor = Number(lines.shift())

let notas = [100, 50, 20, 10, 5, 2]

console.log('NOTAS:');
for (let i = 0; i < 6; i++) {
    let sobra = valor % notas[i]
    let qtd = Math.floor(valor / notas[i])
    valor = sobra.toFixed(2)
    console.log(`${qtd} nota(s) de R$ ${notas[i].toFixed(2)}`);
}

let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
console.log('MOEDAS:');
for (let i = 0; i < 6; i++) {
    let sobra = valor % moedas[i]
    let qtd = Math.floor(valor / moedas[i])
    valor = sobra.toFixed(2)
    console.log(`${qtd} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
}