//2 - Crie um array de números chamado valores. 
// Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [32,1,4,53,3];

const valoresReduzidos = valores.reduce((acumulador,elementoAtul) => acumulador + elementoAtul,0)

console.log(valoresReduzidos);
