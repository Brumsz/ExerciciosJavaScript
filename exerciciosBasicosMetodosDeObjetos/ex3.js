/*3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.*/


const carro = {
    marca : 'BMW',
    modelo : 'M4',
    ano : 2022,
    cor : 'Verde-Militar',
    ligado : false,
    ligar : function ligar(){
        this.ligado ? console.log('O carro ja esta ligado!') : (this.ligado = true,console.log('O carro ligou, Vruuuuum!'));
    },
    desligar : function desligar(){
        this.ligado ?(this.ligado = false,console.log('O carro desligou.')) : console.log('O carro já esta desligado!');
    },
    obterDetalhes : function obterDetalhes(){
        const LigadoOuNao = this.ligado ? 'Ligado' : 'Desligado';
        return `Detalhes do carro \nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${LigadoOuNao}`
    }
};

carro.ligar();
carro.desligar();

console.log(carro.obterDetalhes());
