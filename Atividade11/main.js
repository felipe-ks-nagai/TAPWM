function Calculo(){
    let Base = parseInt(document.querySelector("#Base").value);
    let Altura = parseInt(document.querySelector("#Altura").value);

    let Resultado = Base * Altura;
    document.querySelector("#Resultado").textContent = "O resultado é " + Resultado
}

function ClasseCoiso(){
    class Conta{
        constuctor(nome, correntista, banco, numero, saldo){
            this.nome = nome;
            this.correntista = correntista;
            this.banco = banco;
            this.numero = numero;
            this.saldo = saldo;
        }
    }

    class Corrente extends Conta{
        constructor(saldoEsp){
            this.saldoEsp = saldoEsp;
        }
    }

    class Poupanca extends Conta{
        constuctor(juros, dataVenc){
            this.juros = juros;
            this.dataVenc = dataVenc;
        }
    }
}