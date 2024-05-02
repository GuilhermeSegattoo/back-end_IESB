const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://adminSegatto:1965001485@segattoguilherme.ovkh4ac.mongodb.net/';

let db = null;

async function conectarDb() {
   if (db == null) {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("agenda");
   }
   
   return db;
}

module.exports = conectarDb;
