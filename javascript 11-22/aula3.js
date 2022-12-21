const nota1 = 8;
const nota2 = 7;
const nota3 = 7;

let media = (nota1 + nota2 + nota3)/3;
console.log(media);
if(media <5){
    console.log('Aluno reprovado com ' +media.toFixed(2) + ' de media');
}
else if(7 > media > 5 ){
    console.log('recuperação');
}
else{
    console.log('Aluno aprovado');
}