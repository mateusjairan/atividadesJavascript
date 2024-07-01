// function armazenaNotas(){
//     let nota1 = Number(prompt("Escreva a primeira nota"))
//     let nota2 = Number(prompt("Escreva a segunda nota"))
//     let nota3 = Number(prompt("Escreva a terceira nota"))
//     let media = (nota1 + nota2 + nota3)/ 3
//     let notas = [nota1, nota2, nota3, media]
//     return notas 
// }

// let notasGuardadas = armazenaNotas()

// console.log(notasGuardadas)


function mediaNotas(){
    let notas = []
    for (let i = 1; i <= 3 ; i++){
        notas[i-1]= Number(prompt(`Digite a ${i}º nota`))
    }
    notas[notas.length] = (notas[0] + notas[1] + notas[2] / notas.length)
    return notas
}

alert(mediaNotas())