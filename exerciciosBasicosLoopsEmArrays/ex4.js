//Funcão para encontrar o menor e o maior numero de um vetor

const numeros = [20,90,138,0,39]
const meusNumeros = [15, 8, 90, 3, 22, 54, 2, 101, -5]


function verificadorDeMaiorEMenorNumero(lista){
    
    let menor = lista[0];
    let maior = lista[0]; 
    
    for(let i = 0; i<lista.length ; i++){
       
        if(lista[i] > maior){
            maior = lista[i]
        }
        if(lista[i] < menor){
            menor = lista[i]
        } 
    }

    return `testeo menor número é ${menor} e o maior número é ${maior}`;
}



console.log(verificadorDeMaiorEMenorNumero(numeros));
console.log(verificadorDeMaiorEMenorNumero(meusNumeros));

