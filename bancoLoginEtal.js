let conta = {
    senha: 1234,
    agencia: 1234,
    saldo: 1000,
    titular: 'mateus',
    tipo: "PF",
    emprestimo:[],
    sacar: function(valor,senha){
        if(senha == conta.senha)
        if(conta.saldo >= valor){
            conta.saldo -= valor
            console.log("saque realizado com sucesso")
        }
        else{
            console.log("saldo insuficiente")
        }
    },
    consultarSaldo: function(senha){
        if(senha == conta.senha){
        console.log(`saldo: R$ ${conta.saldo}`)}
        else{
            console.log("senha invalida")
        }
    },
    fazerEmprestimo: function(valor,senha){
        if(senha == conta.senha){
            let qtParcelas = 24
            let juros = 0.02
            let parcela = (valor/qtParcelas) * (1+juros)
            conta.saldo += valor
            let informacoesEmprestimo = [valor,qtParcelas,parcela,juros]
            conta.emprestimo.push(informacoesEmprestimo)
            console.log(`Emprestimo de R$ ${valor} concedido.
            saldo atual da conta é ${conta.saldo}`)
        }
        else{
            console.log("senha invalida")
        }

    },
    depositar: function(valor,senha){
        if(senha == conta.senha){
            conta.saldo += valor
            console.log("Deposito feito com sucesso")
        }
        else{
            console.log("senha invalida")
        }
    }

}

