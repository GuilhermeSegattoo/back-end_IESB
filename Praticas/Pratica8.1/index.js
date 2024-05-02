const readline = require("readline-sync");
const controlador = require("./controlador");

function exibirMenu(){
    console.log("AGENDA");
    console.log("1 -  Consultar");
    console.log("2 -  incluir Contato");
    console.log("3 -  atualizar contato");
    console.log("4 -  remover contato");
    console.log("5 -  sair");
}

async function escolherOpcao(opcao) {
   switch(opcao){
    case "1": { 
          const nome = readline.question("Entre com o nome do contato: ");
          const contato = await controlador.consultarContato(nome);
          console.log("Contato encontrado: ", contato);
          break; 
    }
    case "2": { 
        const nome = readline.question("Entre com o nome do contato: ");
        const email = readline.question("Entre com o email do contato: ");
        const telefone = readline.question("Entre com o telefone do contato: ");
        const contato = await controlador.incluirContato(nome, email, telefone);
        console.log("Contato adicionado: ", contato);
          break; 
    }
    case "3": { 
        const nome = readline.question("Entre com o nome do contato: ");
        const email = readline.question("Entre com o email do contato: ");
        const telefone = readline.question("Entre com o telefone do contato: ");
        const contato = await controlador.atualizarContato(nome, email, telefone);
        console.log("Contato atualizado: ", contato);
         break; 
    }
    case "4": { 
        const nome = readline.question("Entre com o nome do contato: ");
        const contato = await controlador.removerContato(nome);
        console.log("Contato removido: ", contato);
         break; 
    }
    case "5": 
        process.exit(0);
        default:
         console.log("Opcao invalida. Tente novamente");
   }
}

async function main(){
   while(true){
    exibirMenu();
    const opcao = readline.question("Entre com uma opçao: ");
    await escolherOpcao(opcao);
   }
}

main();