let fila = ['Luna', 'Gabriel', 'Isabela', 'Mateus', 'Sofia', 'Lucas', 'Laura', 'Enzo', 'Valentina', 'Rafael']
let ultimosAtendidos = []
let atendimentoAmanha = []

for(let i = 1; i <= 3; i++) {
    let ultimo = fila.shift()
ultimosAtendidos.unshift(fila.shift())
}

let novoTamanhoFila = fila.length

for(let i = 1; i <= novoTamanhoFila; i++){
    let proximo = fila.shift()
    atendimentoAmanha.push(proximo)
}