let pessoa = {
    nome: 'Mateus',
    idade: 24,
    altura: 1.90,
    peso: 60,
    calcularIMC: function(){return pessoa.peso/(pessoa.altura**2)},
    chaves:  PermissionStatus.keys,
    tamanhoObjeto: pessoa.length
}
for(let chave in pessoa){
    console.log(chave);
}

// console.log(`nome:${pessoa.nome},idade:${pessoa.idade},altura: ${pessoa.altura}, peso: ${pessoa.peso}`)




