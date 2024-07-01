function somaIntervalo(inicio, final){
    let soma = 0



    for (let i = inicio; i < final; i++){
        soma += i
    }

    return soma
}

somaInvtervalo(1, 100)

let soma1a100 = somaInvtervalo(1, 100)
console.log(soma1a100)