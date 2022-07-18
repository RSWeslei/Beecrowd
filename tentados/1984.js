var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let valores = lines.shift().split('')

let invertido = []
for (let i = valores.length-1; i >= 0; i--) {
    invertido.push(valores[i])
}

invertido.map((num, index) => {
    if (num == ' '){
        invertido[index] = ''
    }
})
invertido = invertido.join('')
console.log(invertido);