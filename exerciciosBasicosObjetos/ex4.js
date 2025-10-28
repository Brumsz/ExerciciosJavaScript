/*4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.*/

const calculadora = {
    soma : (num1,num2) => num1 + num2,
    subtracao : (num1,num2) => num1 - num2,
    multiplicacao : (num1,num2) => num1 * num2,
    divisao : (num1,num2) => num1 / num2
};

console.log(`Soma : ${calculadora.soma(4,9)}`);
console.log(`Subtração : ${calculadora.subtracao(4,9)}`);
console.log(`Multiplocação : ${calculadora.multiplicacao(4,9)}`);
console.log(`Divisao : ${calculadora.divisao(4,9).toFixed(2)}`);

calculadora.calcularMedia = function mediaDosValores(arrayDeNumeros){
    let total = 0;
    arrayDeNumeros.forEach(numero => total += numero);
    return total / arrayDeNumeros.length;
}

console.log(`Media : ${calculadora.calcularMedia([534,13,431,2,42])
}`);


 
