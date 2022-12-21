class Carros {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoDePercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carros('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2));

const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70,5))

