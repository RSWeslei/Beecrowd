var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let size
while (size = lines.shift())
{
    let array = new Array(size);

    for (let i = 0; i < size; i++) {
        array[i] = new Array(size);
    }
    let unsPos = Math.floor(size/3);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) 
        {
            array[i][j] = (j == i) || (i == size-1 && j == size-1) ? 2 :
            (j == size-1-i) || (j == 0 && i == size-1) ? 3 : 0
            if ((i == Math.floor(size/2) && j == Math.floor(size/2))){
                array[i][j] = 4
            }
            else if ((i >= unsPos && j >= unsPos) && (i <= size-unsPos-1 && j <= size-unsPos-1)){
                array[i][j] = 1 
            }
            process.stdout.write(`${array[i][j]}`)
        }
        console.log();
    }
    console.log();
}