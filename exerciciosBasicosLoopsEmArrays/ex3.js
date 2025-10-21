//Criar uma função que recebe um array de numeros inteiros e faz sua soma

const numeros = [20,90,138,0,39]

let soma = 0;

function somaDeNumerosArray(arrayDeInteiros){
    for(let num of arrayDeInteiros){
        soma += num
    }
}
somaDeNumerosArray(numeros);

console.log(soma)
