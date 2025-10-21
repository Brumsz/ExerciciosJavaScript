//1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function concatArrays(...arrays){
    return [].concat(...arrays);   
}

const list1 = [2,4,5,2]
const list2 = ["Jo","ao"]

console.log(concatArrays(list1,list2));
