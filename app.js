console.log('Calculadora simples');

//import do arquivo da função para calcular dados
const {calcular} = require('./modulos/calculadora.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o primeiro número: ', function (valor1){
    let numero1 = parseFloat(valor1);
    //typeof() - verifica qual o tipo de dado de uma variavel

    entradaDados.question('Digite o segundo número: ', function (valor2){
        let numero2 = parseFloat(valor2);

        entradaDados.question('Escolha a operação a ser calculada: Somar[+], Subtrair[-], Multiplicar[*], Dividir[/], Radiciação, Potenciação[ˆ]  ', function(option){
            let operacao = option.toLowerCase();

            if (resultado = calcular(numero1, numero2, operacao)) {
                console.log('Resultado da operação: ' + resultado);
            }

            entradaDados.close();
        });
    });
});
