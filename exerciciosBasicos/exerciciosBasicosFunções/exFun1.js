//Função para receber idade e ver se pessoa é maior de idade

function maiorIdade(idade){
    if(idade >= 18){
        return 'Maior de idade';
    }
    else{
        return 'Menor de idade';
    }
}

console.log(maiorIdade(4));