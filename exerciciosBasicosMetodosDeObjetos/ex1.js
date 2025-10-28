/*1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.*/

const pessoa = {
    nome : 'João Victor', 
    notas : [5,8.5,5.5],
    calcularMediaNotas : function calcularMediaNotas(){
        let media = 0;
        this.notas.forEach(notas => media += notas);
        return media /= this.notas.length;
    },
    calcularDesempenho : function calcularDesempenho(){
        const notaObtida = this.calcularMediaNotas();
        if(notaObtida >= 9){
            return 'Desempenho exelente';
        }
        else if(notaObtida > 7.5 && notaObtida <= 8.9){
            return 'Bom desempenho';
        }
        else if(notaObtida >= 6 && notaObtida <= 7.5){
            return 'Desempenho regular';
        }
        else{
            return 'Desempenho insuficiente'
        }
    }
}



console.log(`Media obtida do aluno ${pessoa.nome} é de: ${pessoa.calcularMediaNotas().toFixed(2)} \nE seu desempenho foi: ${pessoa.calcularDesempenho()}`);
