var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const [frango, bife, massa] = pegarValores(lines.shift())
const [nFrango, nBife, nMassa] = pegarValores(lines.shift())

let sobraFrango = nFrango >= frango ? (nFrango-frango) : 0
let sobraBife = nBife >= bife ? (nBife-bife) : 0
let sobraMassa = nMassa >= massa ? (nMassa-massa) : 0

console.log(sobraFrango+sobraBife+sobraMassa);