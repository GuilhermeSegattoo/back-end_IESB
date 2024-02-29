const readline = require('readline-sync');


const controladora = require('./controladora');


function menu() {
console.log("1. Listar");
console.log("2. Criar");
console.log("3. Buscar");
console.log("4. Atualizar");
console.log("5. Remover");
console.log("6. Sair");
}


function escolherOpcao(opcao) {
    switch(opcao) {
        case '1' :
            controladora.listar();
          break;
        case '2' :
          controladora.criar();
          break;
        case '3' :
          controladora.buscar();  
          break;
        case '4' :
          controladora.atualizar();  
          break;
        case '5' :
          controladora.remover();  
          break;
        case '6' : Process.exit(0);
        default: console.log('Opcao Invalida');
       
       
    }
    readline.question("Pressione ENTER para continuar...");
}


function main() {
while (true){
    menu();
    const opcao = readline.question("Entre com uma opcao:")
    escolherOpcao(opcao)
}


}


main()


