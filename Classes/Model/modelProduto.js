class Produto {

    constructor(nome, descricao, preco, codigoBarras) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.codigoBarras = codigoBarras;
    }
    
    calculaDesconto(porcentagemDesconto, preco, nomeProduto){
        return preco - preco * (porcentagemDesconto/100);
    }
}