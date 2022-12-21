class Tabuada{
numero;

constructor(numero){
    this.numero = numero;
}

calculaTabuada(){

    for(let i = 0; i <= 10; i++) {
        console.log( i + 'x'+ this.numero + '=' + this.numero * i);
    }
 
}
}
const valor = new Tabuada(5);
valor.calculaTabuada();