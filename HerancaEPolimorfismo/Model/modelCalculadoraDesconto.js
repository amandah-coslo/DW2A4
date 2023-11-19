function Produto(nome, descricao, preco, codigoBarras) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.codigoBarras = codigoBarras;
    this.calculaDesconto = function(porcentagemDesconto) {
        return this.preco - (this.preco * (porcentagemDesconto / 100));
    };
}

// Smartwatch, Smartphone e Laptop herdam de Produto
function Smartwatch(nome, descricao, preco, codigoBarras, marca) {
    Produto.call(this, nome, descricao, preco, codigoBarras);
    this.marca = marca;
}

function Smartphone(nome, descricao, preco, codigoBarras, marca) {
    Produto.call(this, nome, descricao, preco, codigoBarras);
    this.marca = marca;
}

function Laptop(nome, descricao, preco, codigoBarras, marca) {
    Produto.call(this, nome, descricao, preco, codigoBarras);
    this.marca = marca;
}