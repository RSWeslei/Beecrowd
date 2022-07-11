var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [horaEntrada, tempoViagem, fuso] = pegarValores(lines.shift())

let horaChegada = (horaEntrada + tempoViagem) > 24 ? tempoViagem - (24 - horaEntrada) : (horaEntrada + tempoViagem)
horaChegada = (horaChegada + fuso) < 0 ? 24 + (horaChegada+fuso) : (horaChegada + fuso) > 24 ? (horaChegada+fuso) - 24 : (horaChegada + fuso)

console.log(horaChegada);