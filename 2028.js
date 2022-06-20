var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

console.log(2);
while (lines.length > 0)
{
    let line = lines.shift()
    
    for (let i = 0; i < line; i++) 
    {
        let cont = 0
        for (let j = 1; j <= line[i]; j++) {
            cont++
            process.stdout.write(j+' ')
        }   
        line[i] == 0 ? process.stdout.write(0+' '): null
    }

}