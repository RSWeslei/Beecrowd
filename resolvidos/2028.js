var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let valorAtual
let index = 1
while(valorAtual = lines.shift()){
    let qtd = 1
    let array = [0]
    for (let i = 1; i <= valorAtual; i++) {
        for (let j = 1; j <= i; j++) {
            array.push(i)
            qtd++
        }
    }

    let valores = array.toString().split(',').join(' ');
    console.log(`Caso ${index}: ${qtd} ${qtd == 1 ? 'numero' : 'numeros'}`);
    console.log(valores);
    console.log();
    index++
}