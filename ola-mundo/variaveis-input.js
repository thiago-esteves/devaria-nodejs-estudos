const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraconstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraconstanteString);

let leituraDeCampo;
let teste = 'teste'

readline.question('Informe sua idade:', input =>  {
leituraDeCampo = input;
console.log(`o usuario digitou: ${leituraDeCampo} e nossa variavel de teste e: ${teste}`);
});