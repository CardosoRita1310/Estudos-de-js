function escrevaNome(nome){
    return 'Meu nome é: ' + nome;
}

console.log(escrevaNome('Rita'));

function verificaIdade(idade){
if(idade < 18){
    return 'Acesso negado, menor de idade';
}
else{
    return 'Acesso permitido, maior de idade'
}
}

console.log(verificaIdade(17));