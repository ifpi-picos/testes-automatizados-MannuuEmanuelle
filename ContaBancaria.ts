export default class ContaBancaria {
    private saldo = 20;
    private numeroConta = 123;
    private agencia = 89;
    private extrato: String[]

    constructor(){
        this.extrato = []
    } 

    public depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor
            this.extrato.push(`Depósito de R$${valor}, 00`)
        }
    }

    public sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            this.extrato.push(`Saque de R$${valor}, 00`)
        }
    }

    public consultarSaldo() {
        return this.saldo
    }

    public transferir(valor: number, contaDestino: ContaBancaria) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            contaDestino.saldo += valor
            this.extrato.push(`Transferência de R$${valor}, 00`)
        }
    }

    
    public exibirExtrato() {
        for(let extrato of this.extrato){
            return extrato
        }
    }
}