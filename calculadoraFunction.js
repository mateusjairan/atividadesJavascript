let num1 = Number(prompt("informe o primeiro numero"));
let operacao = prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão")
let num2 = Number(prompt("informe o segundo numero"));



function soma(num1, num2) {
    return num1 + num2;
}
function subtrai(num1, num2) {
    return num1 - num2;
}
function multipli(num1, num2) {
    return num1 * num2;
}
function divisao(num1, num2) {
    if (num1 != 0) {
        return num1 / num2;
    }
    else {
        return "ERROR"
    }
}

function calculadora(num1, num2, operacao) {
    operacao = eval(operacao);
    let resultado = operacao(num1, num2);
    alert(resultado);

    // switch (operacao) {
    //     case 1:
    //         alert(soma(num1, num2));
    //         break;
    //     case 2:
    //         alert(subtrai(num1, num2));
    //         break;
    //     case 3:
    //         alert(multipli(num1, num2));
    //         break;
    //     case 4:
    //         alert(divisao(num1, num2));
    //         break;
    // }
}

calculadora(num1, num2, operacao);