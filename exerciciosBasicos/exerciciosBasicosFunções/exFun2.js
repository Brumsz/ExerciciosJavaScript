//Essa função ira verificar se a palavra é um palindromo

const verificarPalindromo = function(palavra){  
    const reversor = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === reversor.toLowerCase();
}

console.log(verificarPalindromo('joao'));
console.log(verificarPalindromo('ovo'));
