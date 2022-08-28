var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let casos = Number(lines.shift());
let cont=0, contCoelho=0, contR=0, contS=0;

for (let i = 0; i < casos; i++) {
    let [qCobaia, tipo] = lines.shift().split(" ")
    qCobaia = Number(qCobaia)
    tipo = tipo.toString()
    if (tipo.includes("C")) {
        contCoelho += qCobaia
    }
    else if (tipo.includes("R")) {
        contR += qCobaia
    }
    else {
        contS += qCobaia
    }
}
cont = contCoelho + contR + contS;
console.log(`Total: ${cont} cobaias`);
console.log(`Total de coelhos: ${contCoelho}`);
console.log(`Total de ratos: ${contR}`);
console.log(`Total de sapos: ${contS}`);
console.log(`Percentual de coelhos: ${((contCoelho * 100) / cont).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((contR * 100) / cont).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((contS * 100) / cont).toFixed(2)} %`);