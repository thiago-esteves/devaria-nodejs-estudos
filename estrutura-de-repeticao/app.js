const listaArgumentos = (process.argv.slice(2));


console.log('-------------------Executando um FOR -----------------')
for( let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}
console.log('-------------------Executando um WHILE-----------------')
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`posicao ${ controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`)
    controladorWhile++;
}
console.log('-------------------Executando um  DO WHILE-----------------')
let controladorDoWhile = 0;
do{
    console.log(`posicao ${ controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`)
    controladorDoWhile++;
}while(controladorDoWhile< listaArgumentos.length)
console.log('-------------------Executando um ---------FOR OF --------')
let controladorForOf = 0;
for(const argumento of listaArgumentos){
     console.log(`posicao ${controladorForOf}Valor lido = ${argumento}`);
     controladorForOf ++;
}
