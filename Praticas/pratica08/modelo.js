const conectardb = require("./database");


// const collection = conectarDb().then(db) => db.collection("contato")

class Contato {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = null;
        this.db = conectardb()
        this.collection = this.db.collection('contato')
    }

    inserir(){
        let result = collection.insertOne({nome, email, telefone});
        this.id = result.ops[0]._id;
    }

    alterar(){
        collection.updateOne({_id: this.id}, {$set:{nome, email, telefone}});
    }

    deletar(){
        collection.deleteOne({_id: this.id})
    }

    buscar(){
        let result = collection.findOne({nome: this.nome});
        if(result){
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
        }
    }
}

module.exports = {Contato}


