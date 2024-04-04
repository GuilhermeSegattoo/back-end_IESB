const express = require('express');
const router = express.Router();

const produtos = [];

router.get("/produtos", function(req, res){
res.json(produtos); 
const encontrado = produtos.find(item => item.id == req.params.produtoId);
if (encontrado) {
    res.json(encontrado);
} else {
    res.status(404).json({msg: "Produto nao encontrado"})
}
});

router.post("/produtos", function(req, res){
if ( req.body && req,body.nome && req.body.preco){
    const novo = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    }
    produtos.push(novo);
    res.status(201).json(novo);
} else {
    res.status(422).json({msg: "Nome e/ou preco do produto não informados"});
}
});





module.exports = router;
