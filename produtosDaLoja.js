let produtos = []

for(let i = 1; i <= 5; i++) {
     let produto = {
     nome : prompt("digite o nome do produto"),
     preco : Number(prompt("digite")),
     cor : prompt("informe a cor do produto"),
     tamanho : Number(prompt("Informe o tamanho do produto")),
     disponivel: confirm("o produto está disponivel?"),
     calculaDesconto: function(desconto = 0){
        return this.preco*(desconto/100)
     },
     alterarDisponibilidade: function(){

        if(this.disponibilidade){
            this.disponibilidade = false
        }
        else{
            this.disponibilidade = true
        }

     }   
    }




    produtos.push(produto);
}

