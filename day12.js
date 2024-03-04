const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

  console.table(countries)
  
const user ={
    name:'Munis',
    age:20,
    city:'Delhi',
    college:'BVP'
}

console.table(user)

console.group('Combine')
console.log(countries)
console.log(user)
console.groupEnd()

console.assert(10 > 2 * 10, "Assertion failed: 10 is not greater than 2 times 10");

console.warn('This is warning not error')
console.error('Make sure names are meaningful')

// while
console.time('While')
let i=0
while(i>countries.length){
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('While')

// for of
console.time('for of')
for(let [country,city] of countries){
    console.log(country,city)
}
console.timeEnd('for of')

//for each 
console.time('for each')
countries.forEach(([n,c])=>{
    console.log(n,c)
})
console.timeEnd('for each')


//console.clear()

