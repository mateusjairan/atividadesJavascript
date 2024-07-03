let funcionarios = [
    {
        nome:"Marcos",
        cargo:"CEO",
        salario:10000,
        gratificacao:5000,
        idade: 19,
    },
    {
        nome:"Lucia",
        cargo:"Gestora de Projetos",
        salario:5000 ,
        gratificacao:1200 ,
        idade: 22,
    },
    {
        nome:"Sara",
        cargo:"Gestora de Finanças",
        salario:5000 ,
        gratificacao:1000,
        idade:45,
    },
    {
        nome:"Lucas",
        cargo:"Desenvolvedor Front-end",
        salario:2500,
        gratificacao:500,
        idade:21,
    },
    {
        nome:"Juracy",
        cargo:"Desenvolvedor Back-end",
        salario:4000,
        gratificacao:500,
        idade:30,
    }
]


funcionarios.forEach((item)=>console.log(`${item.nome} recebe R$ ${(item.gratificacao + item.salario)} de salário e bonificação`))

// funcionarios.forEach((item)=>console.log(`${item.nome} recebe ${item.gratificacao} R$ de gratificação`))

let gratificacoes = funcionarios.map((item)=>{
    let valorGratificacao = item.gratificacao
    return valorGratificacao
})


// let gratificacaoDrobro = funcionarios.map((item)=>{
//     let gratificacoes = item.gratificacao*2
//     return gratificacoes
// })

let gratificacaoDrobro = gratificacoes.map((item)=> item*2)   

let salarioAlto = funcionarios.filter((item)=>{
    if (item.salarioAlto > 4000){
        return item.salarioAlto
    }      
})


let totalGratificacoes = gratificacoes.reduce((soma, item) => soma += item)


let maiores20anos = funcionarios.filter((pessoa)=>{
    if (pessoa.idade>20){
        return pessoa 
    }
})