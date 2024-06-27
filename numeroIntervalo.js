let inicio = 30 
let final = 90
let repeticoes = 10
let contagemNumIntervalo = 0


for(let i = 1; i <= repeticoes; i++){
    let numero = Number(prompt("Digite um numero"))
    
    if(numero < final && numero > inicio){
         contagemNumIntervalo += 1
    }    
}

console.log("contagem dos numeros no intervalo: " + contagemNumIntervalo)