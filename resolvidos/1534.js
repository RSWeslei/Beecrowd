var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

while (lines.length > 0)
{
    let n = lines.shift()
    let array = new Array(n)
    
    for (var i = 0; i < n; i++) {
        array[i] = new Array(n);
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            array[i][j] = (i == (n - j - 1)) ? 2 : i === j  ? 1 : 3
            process.stdout.write(`${array[i][j]}`)
        }
        console.log();
    }
}
