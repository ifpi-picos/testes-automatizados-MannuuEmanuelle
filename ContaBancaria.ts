export default class ContaBancaria {
    private saldo = 20;
    private numeroConta = 123;
    private agencia = 89;
    private extrato = 1


    public depositar(valor:number){
        if(valor > 0){
            this.saldo += valor
        }
    }

   

    public sacar(valor: number){
        if(valor >= this.saldo){
            this.saldo -= valor
        }
    }

    public consultarSaldo(){
        return this.saldo
    }
}