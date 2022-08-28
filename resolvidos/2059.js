var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [p, j1, j2, r, a] = pegarValores(lines.shift())

const jogo = () =>
{
    let winner = (r == 1 && a == 0) ? 1 : (r == 1 && a == 1) ? 2 : (r == 0 && a == 1) ? 1 : null
    if (winner != null) {
        return winner
    }
    else {
        let impar = (j1+j2) % 2 == 0 ? false : true
        if (p == 1){    
            return impar ? 2 : 1 
        }
        else if (p == 0) {
            return impar ? 1 : 2
        }
    }
}
console.log(`Jogador ${jogo()} ganha!`);