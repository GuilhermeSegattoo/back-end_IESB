const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://adminSegatto:1965001485@segattoguilherme.ovkh4ac.mongodb.net/';
const client = new MongoClient(url);

async function conectar(){
    try {
        await client.connect();
    } catch(error) {
        console.log("Deu ruim!")
    }
}

async function atualizar(id, produto){
    const db = client.db('loja');
    return await db.collection('produtos').updateOne({_id: new ObjectId(id)}, {$set: produto})
}

async function inserir(produto){
    const db = client.db('loja');
    return await db.collection("produtos").insertOne(produto);
}

async function listar(){
    const db = client.db("loja");
    return await db.collection("produtos").find({}).toArray();
}

async function remover(id){
    const db = client.db('loja');
    return await db.collection('produtos').deleteOne({_id: new ObjectId(id)});
}

async function main(){
     await conectar()
     let result = await inserir({nome: "chocolate", preco: 20})
     console.log('Produto inserido', result);

     result = await listar();
     console.log("Lista de produtos", result);

     result = await atualizar("662a56a5e90de7de5e56bc3e", {nome: "melao", preco: 40});
     console.log("Produto atualizado", result);

     result = await remover("662a599c1b38a04215211c41");
     console.log("Produto removido", result)


     await client.close()
}

main();
