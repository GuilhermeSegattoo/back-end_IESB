const readline = require('readline-sync');
const controladora = require('./controladora');

export class contato{
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}