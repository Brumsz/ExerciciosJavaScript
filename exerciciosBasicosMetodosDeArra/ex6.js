//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaDosElementos(numeros){
    return numeros.reduce((Acumulador,numeroAtual) => Acumulador + numeroAtual,0);
}

const lisNumbers = [3,5,9,1,21]

console.log(somaDosElementos(lisNumbers));
