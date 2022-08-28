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
    if (vidaMuralha >= dano){
        vidaMuralha -= dano
        flag = true
    }
    else {
        vidaMuralha = vidaMuralhaConst
        cont++
        flag = false
        // console.log('Um tita passou a muralha');
    }
    console.log('vida', vidaMuralha);
    console.log(titaAtual);
    if (tamTitas.length <= 0) break
}
console.log(cont);

//       M     G    G     P     G    G     G     P
// 20 -> 12 -> 2 -> 20 -> 17 -> 7 -> 20 -> 10 -> 3

// -M-G-G-P-G-G-G-P
//       M     G     G          G     P     10         G     G          G     P
// 20 -> 12 -> 2 -> -8 -> 20 -> 10 -> 7 -> -3 -> 20 -> 10 -> 0 -> 20 -> 10 -> 7

// GPMP

// 6 -> 1 -> 6 -> 3 -> 6 -> 2 -> 6