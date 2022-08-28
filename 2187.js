var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

// traduzir o seguiinte codigo para javascript:
/*
 int mul2=0, mul3=0, mul4=0, mul5=0, n, numero;
scanf("%d", &n);
while(n-- > 0){
    scanf("%d", &numero);
    if(numero % 2 == 0){
        mul2++;
    }
    if(numero % 3 == 0){
        mul3++;
    }
    if(numero % 4 == 0){
        mul4++;
    }
    if(numero % 5 == 0){
        mul5++;
    }
}
printf("%d Multiplo(s) de 2\n", mul2);
printf("%d Multiplo(s) de 3\n", mul3);
printf("%d Multiplo(s) de 4\n", mul4);
printf("%d Multiplo(s) de 5\n", mul5);
*/

const n = Number(lines.shift());
let mul2 = 0, mul3 = 0, mul4 = 0, mul5 = 0;
const numeros = pegarValores(lines.shift());
for (let i = 0; i < n; i++) {
    const numero = numeros[i];
    if (numero % 2 == 0) {
        mul2++;
    }
    if (numero % 3 == 0) {
        mul3++;
    }
    if (numero % 4 == 0) {
        mul4++;
    }
    if (numero % 5 == 0) {
        mul5++;
    }
}
console.log(`${mul2} Multiplo(s) de 2`);
console.log(`${mul3} Multiplo(s) de 3`);
console.log(`${mul4} Multiplo(s) de 4`);
console.log(`${mul5} Multiplo(s) de 5`);
