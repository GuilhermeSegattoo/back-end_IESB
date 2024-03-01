const contatoControladora = require('./controladora');
const readline = require('readline-sync');

function menu(){
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato");
    console.log("6. Sair");
};

function escolherOpcao(opcao){
    switch(opcao) {
        case '1' :
            controladora.adicionarContato(nome, email, telefone);
            const nome = readline.question("Digite seu nome: ");
            const email = readline.question("Digite seu E-mail: ");
            const telefone = readline.question("Digite seu Telefone: ");
          break;
        case '2' :
          controladora.listarContatos();
          break;
        case '3' :
          controladora.buscarContatos();  
          break;
        case '4' :
          controladora.atualizarContato();  
          break;
        case '5' :
          controladora.removerContato();  
          break;
        case '6' : Process.exit(0);
        default: console.log('Opcao Invalida');
       
       
    }
    readline.question("Pressione ENTER para continuar...");
}

// falta terminar
