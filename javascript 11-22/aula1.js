const distanciaKm = 100;
const KmPorLitros = 10
const precoGasolina = 5;
const precoEtanol= 3;
const tipoCombustivel = 'gasolina';
let valorGasto;


const litrosConsumidos = distanciaKm/KmPorLitros;
if (tipoCombustivel === 'etanol' ) {
    valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
    
} else if(tipoCombustivel === 'gasolina'){
     valorGasto = litrosConsumidos * precoGasolina;
     console.log(valorGasto.toFixed(2));
}
else{
    console.log('Digite "etanol" para etanol e "gasolina" para gasolina')
}





