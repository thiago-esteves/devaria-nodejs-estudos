const readline = require ('readline').createInterface({

    input: process.stdin,
    output: process.stdout
});

console.log('esse programa vai checar se vc e mairo de 18 anos e tem hatibilitacao para saber se voce pode entrar no kart');
console.log("alem da suas verificaçoes , precisamos se vc esta na lista de presença do horario");

 readline.question('qual e o ano de nascimento?', ano =>{
    if (ano > 2004) {
        console.log('vc nao tem 18 anos');

     }else{
         readline.question('vc tem habilitacao (Sim/Nao)', temHabilitacao =>{
           if (!(temHabilitacao.toLocaleUpperCase()==='Sim')){
               console.log(" vc nao tem habilitacao para entrar no kart");
           }else{
               readline.question('qual seu nome?', nome =>{
                   switch(nome){
                        case 'Douglas':
                           console.log('bem vindo ao Kart Douglas');
                           break;
                        case'Rafael':
                           console.log('bem vindo ao Kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                   }

               });
    
            }
         })

    }
})
          

     
     
    