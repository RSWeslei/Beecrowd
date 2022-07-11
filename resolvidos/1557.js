var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let n = 1
while (n != 0)
{
    n = lines.shift();
    if (n == 0) break;
    let array = createArray(n, n)

    let value = 1, maiorNumero = 0
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            array[i][j] = value
            value *= 2
            if (array[i][j] > maiorNumero) maiorNumero = array[i][j]
        }
        value = array[i][0] * 2
    }
    if (n == 1) {
        console.log(array[0][0])
        console.log();
    } else {
        printArrayJustificado(array, maiorNumero, n)
    }
}

function printArrayJustificado(array, maior, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let currentArray = `${array[i][j].toString().padStart(maior.toString().length, ' ')} `
            if (j == n-1){
                currentArray = currentArray.slice(0, -1) 
            }
            process.stdout.write(`${currentArray}`)     
        }
        console.log();
    }
    console.log();
}

function createArray(length) {
    let arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        let args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
}