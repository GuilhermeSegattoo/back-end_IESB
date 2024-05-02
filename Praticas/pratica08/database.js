const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://adminSegatto:1965001485@segattoguilherme.ovkh4ac.mongodb.net/';

const client =  new MongoClient(url);

async function conectardb(){
    try {
        await client.connect();
        return client.db('agenda');
    } catch (error){
        console.log("Deu ruim!")
    }
}

module.exports = conectardb;