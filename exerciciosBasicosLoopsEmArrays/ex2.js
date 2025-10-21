//criar uma função que recebe um array e imprime o indice e o elemento

const comidas = ["Pizza", "Sushi", "Lasanha", "Tacos", "Hambúrguer", "Coxinha"];

function exibirIndiceElemento(lista){
    for(let i = 0;i < lista.length;i++){
        console.log(`indice ${i}, elemento ${lista[i]}`);
        
    }
}

exibirIndiceElemento(comidas);