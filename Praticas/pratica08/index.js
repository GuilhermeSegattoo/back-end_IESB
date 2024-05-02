
const contatoController = require("./controller");
const readline = require("readline-sync");

function menu(){
    console.log("1- Adicionar Contato");
    console.log("2- Buscar Contato");
    console.log("3- Atualizar Contato");
    console.log("4- Remover Contato");
    console.log("5- Sair");
}

function escolherOpcao(opcao){
   switch(opcao){
    case '1' :{
        const nome = readline.question("Qual o seu nome?");
        const email = readline.question("Qual o seu email?");
        const telefone = readline.question("Qual o seu Telefone?");
        contatoController.adicionarContato(nome, email, telefone);
        break;
    }
    case '2' :{
        const nome = readline.question("Qual o seu nome?");
        const buscado = controller.buscarContato(nome, email, telefone)
        break;
    }
    case '3' :{
        const nome = readline.question("Qual o seu nome?");
        const email = readline.question("Qual o seu email?");
        const telefone = readline.question("Qual o seu Telefone?");
        contatoController.atualizarContato(nome, email, telefone);
        break;
    }
    case '4' :{
        const nome = readline.question("Qual o seu nome?");
        contatoController.removerContato(nome)
        break;
    }
    case '5' :
        process.exit();
        default: console.log("Opção invalida");
   }
}

function main(){
    while(true){
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao)
    }
}
main()