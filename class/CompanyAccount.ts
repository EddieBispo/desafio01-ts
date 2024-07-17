import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if(this.getStatus()) {
      this.setBalance(loanValue)
    } else {
      throw new Error('Conta inválida')
    }
  }
}
