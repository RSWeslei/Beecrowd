var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let n = 1
let count=1
while (n != 0)
{
    n = Number(lines.shift())
    if (n == 0) break
    let resultado=0
    let expressao = lines.shift().split('+').map((a, index) => index != 0 ? ' + '+a : a);
    expressao = expressao.join('')
    expressao = expressao.split('-').map((a, index) => index != 0 ? ' - '+a : a);
    expressao = expressao.join('')
    expressao = expressao.split(' ');
    
    for (let i = 0; i < expressao.length ; i++) {
        if (expressao[i] == '+') {
            resultado = Number(expressao[i-1]) + Number(expressao[i+1])
            expressao[i + 1] = resultado
            i++
        }
        else if (expressao[i] == '-') {
            resultado = Number(expressao[i-1]) - Number(expressao[i+1])
            expressao[i + 1] = resultado
            i++
        }
    }
    console.log(`Teste ${count}`)
    console.log(`${resultado}\n`);
    count++
}