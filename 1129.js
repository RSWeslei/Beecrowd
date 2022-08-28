var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = 1
while (n != 0)
{
  n = Number(lines.shift())
  for (let i = 0; i < n; i++) {
    let questao = lines.shift().split(' ').map(a => Number(a))
    let soma = questao.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    let media = soma / 5
    if (media < 127) {
      console.log('*');
      break
    }
    const min = Math.min(...questao)
    questao.splice(questao.findIndex(a => a == min), 1)
    const min2 = Math.min(...questao)
    if (min2 == min) {
      console.log('nao');
    }
  }
}