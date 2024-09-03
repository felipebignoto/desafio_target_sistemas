// int INDICE = 12, 
// SOMA = 0, 
// K = 1; 
// enquanto K < INDICE 
//     faça { K = K + 1; SOMA = SOMA + K; } 
    
// imprimir(SOMA)

function somaIncremental(){
    const indice = 12;
    let soma = 0;
    let k = 1;

    while(k < indice){
        k++;
        soma = soma + k;
    }
    console.log(soma);
}

somaIncremental()
// Valor de soma será de 77