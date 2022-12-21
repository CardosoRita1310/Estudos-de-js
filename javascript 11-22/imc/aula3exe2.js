
//function enviar(){
    let peso = 50;//document.getElementById("#peso") ;
    let altura = 1.68;
    let imc = peso / Math.pow(altura,2);
    
    
    if (imc < 18.5) {
        console.log('abaixo do peso');
    } 
    else if (25 > imc > 18.5){
        console.log('peso normal');
    }
    else if (25 < imc < 30){
        console.log('acima do peso');
    }
    else if(30 < imc < 40){
        console.log('obeso')
    }
    else {
        console.log('obesidade grave');
    }
    

//}

