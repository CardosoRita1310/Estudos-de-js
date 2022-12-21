let precoProduto = 100;
let condicaoPagamento = ['debito', 'pix', 'dinheiro', 'duas vezes', 'parcelado'];
let escolha = condicaoPagamento[1];

if (escolha === condicaoPagamento[0]) {
    let desconto = precoProduto * 0.1;
    precoProduto -= desconto;
    console.log(precoProduto + " condição de pagamento " + condicaoPagamento[0]);
}
else if (escolha === condicaoPagamento[1] || escolha === condicaoPagamento[2]) {
    let desconto = precoProduto * 0.15;
    precoProduto -= desconto;
    console.log(precoProduto + " condição de pagamento " + condicaoPagamento[1]);
}else if(escolha === condicaoPagamento[3]){
    console.log(precoProduto + " para " + condicaoPagamento[3])
}
else if(condicaoPagamento[4]){
    let juros = precoProduto * 0.1;
    precoProduto += juros;
    console.log(precoProduto + " para " + condicaoPagamento[4]);
}
