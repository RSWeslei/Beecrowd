var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = 1
while (true)
{
    n = lines.shift()
    if (n == 0) break
    let array = new Array(n)
    
    for (var i = 0; i < n; i++) {
        array[i] = new Array(n);
    }
    let maiorNumero=0
    for (let i = 0; i < n; i++) {
        let somar = false
        let maior = i + 1
        somar = maior > 1 ? false : true
        for (let j = 0; j < n; j++) {
            array[i][j] = maior
            if (somar) {
                maior++
                if (j == n-1) {
                    somar = false
                }
            } else {
                maior--
                if (maior == 1){
                    somar = true
                }
            }
            if (array[i][j] > maiorNumero) maiorNumero = array[i][j]
        }
    }
    printArrayJustificado(array, maiorNumero, n)
}


function printArrayJustificado(array, maior, n) {
    let spaces = maior.toString().length == 1 ? "   " : maior.toString().length == 2 ? "  " : " "
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let currentArray = `${array[i][j].toString().padStart(maior.toString().length)}${spaces}`
            if (j == n-1){
                currentArray = currentArray.slice(0, maior.toString().length)
            }
            if (j === 0){
                process.stdout.write(`${spaces.slice(0, -1)}${currentArray}`)     
            }
            else {
                process.stdout.write(`${currentArray}`) 
            }
        }
        console.log();
    }
    console.log();
}
