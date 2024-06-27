// for(let i = 0; o < 101; i+=2){
//     console.log(i)
// }
media = 0
somaNotas = 0
pesos = 0

for(let i = 1; i<=12; i++){
    if(i == 4 || i ==2){
        somaNotas += (Number(prompt(`digite a nota nº ${i}`))*2)
        pesos += 2
    }
    else if (i == 3){
        somaNotas += (Number(prompt(`digite a nota nº ${i}`))*3)
        pesos += 3
    }
    else{
        somaNotas += (Number(prompt(`digite a nota nº ${i}`)))
        pesos += 1
    }
}