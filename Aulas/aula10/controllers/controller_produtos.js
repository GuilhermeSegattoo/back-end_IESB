const mongoose = require('mongoose');
const Produto = require('../models/model_produtos');

async function validar(req,res, next){
    try {
        const produto = new Produto(req.body);
        await produto.validate();
        next();
    } catch (err) {
        res.status(422).json({});
    }
}

async function criar(req, res) {
       const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}

async function listar(req, res) {
    const produtos = await Produto.find({});
    res.json(produtos);
}

async function buscar(req, res, next) {
  try{
    const id = new mongoose.Types.ObjectId(req.params.id)
  const produto = await Produto.findOne({ _id: id });
  if(produto){
    next()
  } else {
    res.status(404).json({msg: "Produto não encontrado"})
  }
} catch(error){
    res.status(400).json({msg: "Id invalido"});
}
}

async function obter(req, res){
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findOne({ _id: id })
    res.json(produto);

}

async function atualizar(req,res){
    res.json({})
}
module.exports = { criar, validar, listar, buscar, obter, atualizar };