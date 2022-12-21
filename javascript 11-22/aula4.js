main();

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}


function classificação(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    }
    else if (25 > imc > 18.5) {
        return 'peso normal';
    }
    else if (25 < imc < 30) {
        return'acima do peso';
    }
    else if (30 < imc < 40) {
       return 'obeso';
    }
    else {
        return 'obesidade grave';
    }

}
function main() {

    const imc = calcularImc(40, 1.55);
    console.log(classificação(imc));

}


