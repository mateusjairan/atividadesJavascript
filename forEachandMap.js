let frutas = ['maçã','uva', 'banana']

let numeros = [1,2,3,4]

frutas.forEach((FRUTA) => console.log(FRUTA.toUpperCase()))
console.log(frutas)

let numerosDobro = numeros.map((num) => {console.log(num)
    return num*2
})               


// let par = numeros.filter(){
//     if(x%2 == 0){
//         return x
//     }
// }

let listaDeAlunos = [
    {
        nome:'Ana',
        nota: 8
    },
    {
        nome:'Maria',
        nota: 5
    },
    {
        nome:'Paulo',
        nota: 10
    },
    {
        nome:'Jose',
        nota: 7
    }


]


console.log(listaDeAlunos[1].nome)

let aprovados = listaDeAlunos.filter((listaDeAlunos)=>{
    if(listaDeAlunos.nota >= 7){
    return listaDeAlunos
}

})

let somaNumeros = numeros.reduce((soma,num,)=> soma += num)

console.log(somaNumeros)

let notas = aprovados.map((elemento)=>elemento.nota)

let somaDasNotas =  notas.reduce((soma,nota)=> soma += nota)
    