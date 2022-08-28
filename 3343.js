var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [qtdTitas, vidaMuralha] = pegarValores(lines.shift())
let tamTitas = lines.shift().split('')
let [p, m, g] = pegarValores(lines.shift())

let muralhas = []
let dano = 0
muralhas.push(vidaMuralha)

for (let j = 0; j < qtdTitas; j++) 
{
    let titaAtual = tamTitas[j]
    let ultimaMuralha = muralhas.length - 1
    titaAtual == 'P' ? dano = p : null
    titaAtual == 'M' ? dano = m : null
    titaAtual == 'G' ? dano = g : null

    for (let i = 0; i < muralhas.length; i++) {
        if (dano <= muralhas[i]){
            muralhas[i] -= dano
            break
        }
        else {
            if (i == (ultimaMuralha)){
                muralhas.push(vidaMuralha)
            }
        }
    }

}
console.log(muralhas.length);
