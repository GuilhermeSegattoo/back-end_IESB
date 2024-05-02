const readline = require('readline-sync');
const produtos = [];


function criar() {
    const nome = readline.question("Informe o nome do Produto: ");
    const preco = readline.question("Informe o preco do Produto: ");
    const novo = {nome, preco};
    produtos.push(novo);
}


function listar() {
    produtos.forEach((produtos)=>
    console.log(produtos.nome, "-", produtos.preco));
}


function buscar() {
    const nome = readline.question("Informe o nome do Produto: ");
    const buscou = produtos.find(produtos => produtos.nome === nome);
    if (buscou) {
        console.log(buscou.nome, "-", buscou.preco);
    } else {
        console.log("Produto não encontrado");
    }
}


function atualizar() {
    const nome = readline.question("Informe o nome do Produto: ");
    const buscou = produtos.find(produtos => produtos.nome === nome);
    if (buscou) {
        const outroNome = readline.question("Informe outro nome do Produto: ");
        const outroPreco = readline.question("Informe o Novo preco do Produto: ");
        buscou.nome = outroNome;
        buscou.preco = outroPreco;
    } else {
        console.log("Produto não encontrado");
    }
}


function remover() {
    const nome = readline.question("Informe o nome do Produto: ");
    const posicao = produtos.findIndex((produtos) => produtos.nome === nome);
    if (posicao >= 0) {
        produtos.splice(posicao, 1);
    } else {
        console.log("Produto Não encontrado")
    }
}


module.exports = {criar, listar, buscar, atualizar, remover};
