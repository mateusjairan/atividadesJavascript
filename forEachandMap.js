let frutas = ['maçã','uva', 'banana']

let numeros = [1,2,3,4]

frutas.forEach((FRUTA) => console.log(FRUTA.toUpperCase()))
console.log(frutas)

let numerosDobro = numeros.map((num) => {console.log(num)
    return num*2
})               