const numero = 5;
const numeroDivisivelPorCinco = numero % 5 === 0;

if(numero === 0){
    console.log("invalido")
}
else if(numeroDivisivelPorCinco){
    console.log("Sim")
}
else{
    console.log('não');
}
