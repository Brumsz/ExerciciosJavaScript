/*2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.*/

const pessoa = {
    nome : 'joão',
    idade : 20,
    solteiro : false,
    hobbies : ['Academia','Basquete','Video Game']
}; 

pessoa.endereco = {
    rua : 'Avenida paulisa',
    cidade : 'São Paulo',
    estado : "São Paulo",
};


function mostrarInfoPessoa(objPessoa){
    console.log('Informações da pessoa');
    console.log(`Nome : ${pessoa.nome}(tipo de dado : ${typeof pessoa.nome})`);
    console.log(`Idade : ${pessoa.idade}(tipo de dado : ${typeof pessoa.idade})`);
    console.log(`Solteiro : ${pessoa.solteiro}(tipo de dado : ${typeof pessoa.solteiro})`);
    console.log(`Hobbies : ${pessoa.hobbies.join(",")}(tipo de dado : ${typeof pessoa.hobbies})`);
    console.log('Endereço');
    console.log(`Rua : ${pessoa.endereco.rua}`);
    console.log(`Cidade : ${pessoa.endereco.cidade}`);
    console.log(`Estado : ${pessoa.endereco.estado}`);
        
};

mostrarInfoPessoa(pessoa);