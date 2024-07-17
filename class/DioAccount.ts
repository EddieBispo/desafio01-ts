export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (amountDeposited: number): void => {
    if(this.validateStatus()){
      this.balance = amountDeposited
      console.log(`Deposito de R$ ${this.balance} realizado!`)
    }
  }

  withdraw = (amountWithdraw: number): void => {
    if(this.validateStatus() && this.balance  >= amountWithdraw) {
      this.balance -= amountWithdraw
      console.log(`Saque de R$ ${amountWithdraw} efetuado com sucesso!`)
    } else {
      console.log('O valor a ser sacado não pode ser maior que o saldo da conta!')
    }
  }
  

  getBalance = (): void => {
    console.log(`Balance: ${this.balance}`)
  }

  setBalance = (loanValue: number): void => {
    this.balance += loanValue
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getStatus = (): boolean => {
    return this.status
  }
}
