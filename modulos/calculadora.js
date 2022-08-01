/*

Objetivo: arquivo que contem todas as funções para calculos matemáticos
Autor: Lídia Galdino
Data de criação: 01/08/22
Versão: 1.0

*/

function calcular(valor1, valor2, opcaoCalculo) {

    let erro = false;
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toLowerCase();
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Número inválido, digite apenas números');
        erro = true;
    } else{

        if (operacao == 'somar' || operacao == '+') {
            resultado = numero1 + numero2;
        } else if (operacao == 'subtrair' || operacao == '-'){
            resultado = numero1 - numero2;
        } else if (operacao == 'multiplicar' || operacao == '*'){
            resultado = numero1 * numero2;
        } else if (operacao == 'dividir' || operacao == '/'){
            if(numero2 == 0){
                console.log('Não existe divisão por 0');
                erro = true;
            } else{
                resultado = numero1 / numero2;
            }  
        } else {
            console.log('Operação inválida');
            erro = true;
        }
    }


    if (erro) {
        return false
    } else{
        return resultado;
    }
}

// As funções que serão importadas em outros projetos, precisam obrigatóriamente serem incluidas no module.exports
module.exports = {
    calcular
}