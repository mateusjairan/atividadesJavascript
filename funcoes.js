function dizerOi(){
    console.log("OI");
}

// dizerOi();

// function calcularMedia(n1,n2,n3){
//     let media = (n1 + n2 + n3) / 3;
//     console.log(media);
// return "sou o rertono da função"
// }

// calcularMedia(8,8,9)

// function nomeIdade(){
//     let nome = prompt("informe seu nome.")
//     let idade = Number(prompt("informe sua idade."))
//     return console.log(nome + idade )
// }

// nomeIdade();

function calculadora(){
    let operacao = Number(prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão"))
    let resultado
   switch(operacao){
    case "1":
     resultado = num1 + num2;
     break;
    case "2":
     resultado = num1 - num2;
     break;
     case "3":
     resultado = num1 * num2;
    
      
   }
}