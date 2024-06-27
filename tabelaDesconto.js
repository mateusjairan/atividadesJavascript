let min = 1
let max = 25
let valorCompra = 500.00
let incrementoCompra = 100.00

for(let i = min ; i <= max ; i++){
let valorFinal = valorCompra - (valorCompra * i/100)
    console.log(`Valor Compra: ${valorCompra} - ${i}% - Valor final: ${valorFinal}`)
    valorCompra += incrementoCompra


}