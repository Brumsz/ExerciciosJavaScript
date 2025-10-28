/*3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido. */

const pessoas = [{
    nome : 'João',
    idade : 20,
    cidade : 'São paulo'
},{
    nome : 'Fabiana',
    idade : 21,
    cidade : 'Caracas'
},{
    nome : 'Marcos',
    idade : 58,
    cidade : 'Lages'
}];

function mostrarListaPessoas(listaPessoas){
    for(let i = 0;i < listaPessoas.length;i++){
        console.log(`Pessoa ${i +1}`);
        console.log(`Nome : ${pessoas[i].nome}`);
        console.log(`Idade : ${pessoas[i].idade}`);
        console.log(`Cidade : ${pessoas[i].cidade}`);
        console.log('-='.repeat(30));
        
    }
}

pessoas.push({
    nome : 'Arthur',
    idade : 23,
    cidade : 'Santos'
});

//mostrarListaPessoas(pessoas);

function filtrarPorCidade(listaDePessoas,nomeDaCidade){
    return listaDePessoas.filter(pessoas => pessoas.cidade === nomeDaCidade);
    
};

mostrarListaPessoas(pessoas);

const pessoasQueMoramEmSP = filtrarPorCidade(pessoas,'São paulo')

console.log('Pessoas que moram em São Paulo');
console.log(pessoasQueMoramEmSP);

