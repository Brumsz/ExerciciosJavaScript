///2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.///

function executaOperacaoEmArray(lista,funcao){
    return lista.map(funcao)
}

function multiplicacao(numero){
    return numero * 2
}

const numeros = [1,2,3,4,5,6]

const somaDosNumeros = executaOperacaoEmArray(numeros,multiplicacao)

console.log(somaDosNumeros);
