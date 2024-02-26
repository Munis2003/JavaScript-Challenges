const dog={
    name:'Shiro',
    legs:'four',
    color:'brown',
    age:2 ,
    bark:'woof woof'
};
console.log(dog.bark)
console.log(dog)
dog.breed = 'labrador'
function getinfo(){
    return "Name: " + dog.name +
    "\nLegs: " + dog.legs +
    "\nColor: " + dog.color +
    "\nAge: " + dog.age +
    "\nBark Value: " + dog.bark +
    "\nBreed: " + dog.breed;
}
var doginfo = getinfo(dog)
console.log(doginfo)


const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let winner;
  let max=0;
  for(let fake in users){
    if(users[fake].skills.length >max){
        max = users[fake].skills.length
        winner = fake
    }
  }
  console.log(winner)

  let loggedIn =0
  let totalpoints =0
  for(let count in users){
    if(users[count].isLoggedIn){
        loggedIn++
    }
    if(users[count].points>=50){
        totalpoints++
    }
  }
  console.log("Total points are "+totalpoints)
  console.log("Total logged  in users are "+loggedIn)


  let mernstack = []
  for(let devloper in users){
    const skills = users[devloper].skills
    if(skills.includes('MongoDB')&&
    skills.includes('Express')&&
    skills.includes('React')&&
    skills.includes('Node')
    ){
        mernstack.push(devloper)
    }    
  }
  console.log("MERN stack devloper are " +mernstack)
  
  const usersADD =  Object.assign({name:'Munis',users})
  console.log(usersADD)

  let keyss = Object.keys(users)
  let valuess = Object.values(users)
console.log(keyss)  
console.log(valuess)
  

const countries = {
    name:'India',
    capital:'Delhi',
    population:'8 billion',
    language:['hindi','marathi','punjab']
}
console.log(`${countries.name}\n ${countries.capital}\n ${countries.population}\n ${countries.language}`)

const personAccount = {
  firstname:"",
  lastname:"",
  incomes:[],
  expenses:[],
  totalincome(){
    let total = 0
    for(let incomeval of this.incomes){
      total+=incomeval.amount
    }
    return total
  },

  totalexpense(){
    let total1 = 0
    for(let expenseval of this.expenses){
      total1+=expenseval.amount
    }
    return total1

  },

  accountinfo(){
    console.log(`Account Information :\n Name:${this.firstname} ${this.lastname} \n Total Income: ${this.totalincome()}\nTotal Expense: ${this.totalexpense()}`)
  },

  addincome(description,amount){
    this.incomes.push({description,amount})
  },

  addexpense(description,amount){
    this.expenses.push({description,amount})
  },

  accountbalance(){
    return this.totalincome() - this.totalexpense()
  }
};


personAccount.firstname='Munis'
personAccount.lastname='Abbas'
personAccount.addincome("salary",5000)
personAccount.addexpense("rent",4000)
console.log(personAccount.accountinfo());
console.log("Account Balance:",personAccount.accountbalance());

