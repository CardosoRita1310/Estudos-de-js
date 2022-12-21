function main(){
console.log(pagamento(aplicarDesconto(10, 100)));
console.log(aplicarJuros(100));

}
main();

function aplicarDesconto(desconto, precoProduto){
return (precoProduto - (precoProduto * desconto/100));
}

function aplicarJuros(precoProduto){
    return (precoProduto + 10);
    }

function pagamento(precoProduto) {
const condicaoPagamento = 5;

    if (condicaoPagamento === 1) {
       return (precoProduto + " condição de pagamento " + condicaoPagamento);
    }
    else if (condicaoPagamento === 2  || condicaoPagamento ===3) {
        return (precoProduto + " condição de pagamento " + condicaoPagamento);
    } else if (condicaoPagamento===4) {
       return (precoProduto + " para " + condicaoPagamento)
    }
    else if (condicaoPagamento === 5) {
        const precoJuros = aplicarJuros();
        return 'este é o preço para esta condição ' + precoJuros;
    }

}




