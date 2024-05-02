const Contato = require("./modelo");

function adicionarContato(nome, email, telefone){
    const contato = new contato(nome, email, telefone);
    contato.inserir();
}

function buscarContato(nome){
const contato = new contato(nome);
contato.buscar();
return contato;
}

function atualizarContato(nome, email, telefone){
    const contato = buscarContato();
    if(buscarContato){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        contato.alterar();
    }
}

function removerContato(nome){
    const contato = buscarContato();
    if(buscarContato){
        contato.deletar()
    }
}

module.exports = {adicionarContato, buscarContato, atualizarContato, removerContato}