class Pessoa {
    nome;
    peso;
    altura;

constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}
 
calculaImc(){
    return this.peso / Math.pow(this.altura, 2);
}


classificarImc(){
    const imc = this.calculaImc();
    if (imc < 18.5) {
        return ('abaixo do peso');
    } 
    else if (25 > imc > 18.5){
        return ('peso normal');
    }
    else if (25 < imc < 30){
        return ('acima do peso');
    }
    else if(30 < imc < 40){
        return ('obeso')
    }
    else {
        return ('obesidade grave');
    }

}

}

const jose = new Pessoa('José', 70, 1.75);
const rita =new Pessoa('Rita', 72.5, 1.65);
const renan = new Pessoa('Renan', 63, 1.75);
console.log(jose.calculaImc().toFixed(2) + jose.classificarImc());
console.log(renan.calculaImc().toFixed(2));
console.log(rita.calculaImc().toFixed(2));


