numUser = (prompt("Digite um numero"))


let numMenor = numUser
let numMaior = numUser
let qtdNum = 10


for (let i = 2; i <= qtdNum; i++) {
    numUser = prompt(`Digite o ${i}º numero`)

    if(numUser > numMaior){
        numMaior = numUser
    }
    else if (numUser < numMenor){
        numMenor = numUser
    }
    
    if ( i < 11){
        numUser = prompt(`Digite o ${i}º numero`)
    }
}