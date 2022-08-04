/*

Objetivo: arquivo que contem todas as funções para calculos matemáticos
Autor: Lídia Galdino
Data de criação: 01/08/22
Versão: 2.0

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
            resultado = somar(numero1, numero2);
        } else if (operacao == 'subtrair' || operacao == '-'){
            resultado = subtrair(numero1, numero2);
        } else if (operacao == 'multiplicar' || operacao == '*'){
            resultado = multiplicar(numero1, numero2);
        } else if (operacao == 'dividir' || operacao == '/'){
            if(numero2 == 0){
                console.log('Não existe divisão por 0');
                erro = true;
            } else{
                resultado = dividir(numero1, numero2);
            }  
        }else if (operacao == 'radiciação' || operacao == 'radiciaçao'){
            resultado = radiciacao(numero1, numero2);
        } else if (operacao == 'potencia' || operacao == 'ˆ'){
            resultado = potenciacao(numero1, numero2);
        }
         else {
            console.log('Operação inválida');
            erro = true;
        }
    }


    if (erro) {
        return false;
    } else{
        return resultado.toFixed(2);
    }
}

//modelo Arrow Function: 
const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2);
const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2);
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2);
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2);
const radiciacao = (valor1, valor2) => Math.pow(parseFloat(valor1), 1/parseFloat(valor2));
const potenciacao = (valor1, valor2) => Math.pow(parseFloat(valor1), parseFloat(valor2));

//const calcular = function(valor1, valor2, opcaoCalculo){}

// As funções que serão importadas em outros projetos, precisam obrigatóriamente serem incluidas no module.exports
module.exports = {
    calcular
}