/*4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.*/

const carro = {
    marca : 'BMW',
    modelo : 'M4',
    ano : 2022,
    cor : 'Verde-Militar',
    ligado : false,
    ligar : function ligar(){
        return this.ligado ? console.log('O carro ja esta ligado!') : (this.ligado = true,console.log('O carro ligou, Vruuuuum!'));
    },
    desligar : function desligar(){
        return this.ligado ?(this.ligado = false,console.log('O carro desligou.')) : console.log('O carro já esta desligado!');
    },
    obterDetalhes : function obterDetalhes(){
        const LigadoOuNao = this.ligado ? 'Ligado' : 'Desligado';
        return `Detalhes do carro \nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${LigadoOuNao}`
    }
};

function tornarNaoEnumeravel(nomeDoObjeto,nomeDaPropriedade){
    return Object.defineProperty(nomeDoObjeto,nomeDaPropriedade,{
        enumerable : false
    });
}

Object.defineProperty(carro,'placa',{
    value : 'FBD-1665',
    enumerable : false
})

tornarNaoEnumeravel(carro,'ligar');
tornarNaoEnumeravel(carro,'desligar');
tornarNaoEnumeravel(carro,'obterDetalhes');



for(let intens in carro){
    console.log(`${intens}: ${carro[intens]}`);
}

const chavesEnumeraveis = Object.keys(carro);
console.log(chavesEnumeraveis);

console.log(carro.placa);




