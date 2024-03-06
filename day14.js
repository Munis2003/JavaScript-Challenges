
// localStorage.setItem('Firstname','Munis')
// localStorage.setItem('Lastname','Abbas')
// localStorage.setItem('Age',20)
// localStorage.setItem('city','Delhi')
// localStorage.setItem('country','India')
// console.log(localStorage)


// const student ={
//     name:'Munis',
//     age:20,
//     skills:['HTML','CSS','JavaScript'],
//     country:'India',
// }

// const hello=localStorage.setItem('student',JSON.stringify(student))
// console.log(hello)

// console.log(localStorage.getItem('student'))

const personAccount = {
    firstname:'Munis',
    lastname:'Abbas',
    income:[],
    expense:[],
totalincome(){
    let total=0
    for(let totally of this.income){
        total+=totally.amount
    }
    return total
},
totalexpense(){
    let total1= 0
    for(let totalexp of this.expense){
        total1+=totalexp.amount
    }
    return total1
},
accountinfo(){
    console.log(`Account information:\n Total income: ${this.totalincome()}\n Total expnese : ${this.totalexpense()}`)
},
addIncome(description,amount){
    this.income.push({description,amount})
},
addExpense(description,amount){
    this.expense.push({description,amount})
},
totalbalance(){
    return this.totalincome() - this.totalexpense()
}
}

personAccount.addIncome('salary',5000)
personAccount.addExpense('Rent',3000)
console.log(personAccount.accountinfo())
console.log("Account balance",personAccount.totalbalance())

const storetostorage = localStorage.setItem('personAccount',JSON.stringify(personAccount))
console.log(storetostorage)

console.log(localStorage.getItem('personAccount'))