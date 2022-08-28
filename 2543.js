var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = 1
let idUniversidade
while (lines.length > 0)
{
    [n, idUniversidade] = pegarValores(lines.shift())
    let csCount=0
    for (let i = 0; i < n; i++) {
        const [id, game] = pegarValores(lines.shift())
        if (id == idUniversidade){
            game == 0 ? csCount++ : null
        }
    }
    console.log(csCount);
    if(lines.length == 0 ) break
}
