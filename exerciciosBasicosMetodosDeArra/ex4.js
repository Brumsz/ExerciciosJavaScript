//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function filtrarNumerosPares(numeros){
    return numeros.filter((num) => num%2 === 0);
}

const numerosTeste = [3,4,2,6,1]

console.log(filtrarNumerosPares(numerosTeste));
