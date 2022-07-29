console.log('Calculadora simples');

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

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log('Número inválido');
            entradaDados.close();
            exit();
        }

        entradaDados.question('Escolha a operação a ser calculada: Somar[+], Subtrair[-], Multiplicar[*], Dividir[/] ', function(option){
            let operacao = option.toLowerCase();
            let resultado;

            if (operacao == 'somar' || operacao == '+') {
                resultado = numero1 + numero2;
            } else if (operacao == 'subtrair' || operacao == '-'){
                resultado = numero1 - numero2;
            } else if (operacao == 'multiplicar' || operacao == '*'){
                resultado = numero1 * numero2;
            } else if (operacao == 'dividir' || operacao == '/'){
                if(numero2 == 0){
                    console.log('Não existe divisão por 0');
                    entradaDados.close();
                    exit();
                }
                resultado = numero1 / numero2;
            } else {
                resultado = 'Operação inválida';
            }

            if (typeof(resultado) == 'string') {
                console.log(resultado);
            } else{
                console.log('Resultado da operação: ' + resultado);
            }

            entradaDados.close();
        });
    });
});