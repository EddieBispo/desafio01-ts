import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (amountDeposited: number): void => {
        if(this.getStatus()){
          const bonus: number = 10
          const totalAmount = amountDeposited + bonus
          this.setBalance(totalAmount)
          console.log(`Deposito de R$ ${totalAmount} (${amountDeposited} + ${bonus}) realizado!`)
        }
      }

}