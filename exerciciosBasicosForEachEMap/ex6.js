//Exercício 6: Transformando Dados com map
//O método map é perfeito para criar um novo array com base em um array existente, mas com os dados transformados. 
//Diferente do forEach, seu principal uso é para gerar um novo resultado.
//Problema: Você tem um array de produtos, cada um com nome e preco. 
// Crie um novo array contendo strings formatadas que digam "O produto [nome] custa R$ [preco]".

const produtos = [
  { nome: 'Laptop', preco: 2500 },
  { nome: 'Mouse', preco: 80 },
  { nome: 'Teclado', preco: 150 }
];

const novaFormatacaoDosProdutos = produtos.map(produto => `O produto ${produto.nome} custa R$ ${produto.preco}`)

console.log(novaFormatacaoDosProdutos);
