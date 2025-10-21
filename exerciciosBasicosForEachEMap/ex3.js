///3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".///
const numeros = [1,2,3,4,5,6]
const numeroProcurado = 30
let indice = -1

for(let i = 0; i < numeros.length;i++){
    if(numeros[i] === numeroProcurado){
        indice =i;
        break;
    }
}

console.log(`O numero procurado é ${numeroProcurado} e esta no indice ${indice}`);

