//5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function multiplosDe3EMaioresQue5(numeros){
    return numeros.filter((num) => num%3 === 0 && num > 5);
}

const lisNumbers = [3,5,9,1,21]

console.log(multiplosDe3EMaioresQue5(lisNumbers));
