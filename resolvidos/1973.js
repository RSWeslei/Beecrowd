var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift())
let carneiros = pegarValores(lines.shift())
let i = 0
let anterior = 0
let estrelasAtacadas = [n]

while(true)
{
    if (carneiros[i] == null) break 
    estrelasAtacadas[i] = true
    anterior = i
    carneiros[i] % 2 != 0 ? i++ : i--
    carneiros[anterior] > 0 ? carneiros[anterior]-- : null
}

console.log(`${estrelasAtacadas.length} ${somaArray(carneiros)}`);

function somaArray(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum += array[index]
    }
    return sum
}