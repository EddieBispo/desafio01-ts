import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(99999999999, 'Eduardo Bispo', 1)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(90)
peopleAccount.getBalance()
peopleAccount.withdraw(20)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2)
console.log(companyAccount)
companyAccount.deposit(100)
peopleAccount.getBalance()
companyAccount.getLoan(50)
peopleAccount.getBalance()
companyAccount.withdraw(100)
peopleAccount.getBalance()
companyAccount.withdraw(60)

const newAccount: NewAccount = new NewAccount('Jão Ninguem', 3)
console.log(newAccount)
newAccount.deposit(100)
newAccount.getBalance()
newAccount.withdraw(100)
newAccount.getBalance()
newAccount.withdraw(20)