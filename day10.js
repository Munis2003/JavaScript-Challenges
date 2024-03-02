const user = {
        name1:'Munis',
        age:20,
        address:{
            long:111.222,
            lat:444.555,
        },
    };

    function greetings(user){
        const{name1,age,address}=user
        const{long,lat}=address
        console.log(`Hello my  name is ${name1} I am ${age}years old and My Address is ${long} ${lat} `)
    }

    greetings(user)

const val = [1,2,3]
let[a,b,c]=val
console.log(val)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

const [frontend,backend]=fullStack
console.log(frontend)
console.log(backend)

const number = [1,2,3,4,5,6,7,8,9,10]
let[m,n,o,...rest]=number
console.log(m,n,o)
console.log(rest)

// loop

for(let[first,second,third] of fullStack){
    console.log(first,second,third)
}

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm']]
for(let [country,city] of countries){
    console.log(country,city)
}

// Objects 



