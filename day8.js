// //callback
// const callback=(n)=>{
//     return n**2
// }
// function cube(callback,n){
//     return callback(n)*n
// }
// console.log(cube(callback,3))

// //timeout
// setTimeout(function(){
//     console.log("hello")
// },2000)

// //foreach
// const val = [1,2,3,4,5]
// val.forEach(num=>num*2)
// console.log(val)
//

//map
// const num=[1,2,3,4,5]
// const final=num.map(number=>number*2)
// console.log(final)

// const doctor =[
//     {name:'Munis',age:20},
//     {name:'Mohit',age:30},
//     {name:'Rohit',age:25}
// ];
// const docname = doctor.map(doc=>doc.age)
// console.log(docname)

// const names = ['hsabeneh', 'Mathias', 'Elias', 'Brook']
// const hell=names.map((hello)=>hello.toUpperCase().slice(0,3))
// console.log(hell)

// //filter
// const oddnum = num.filter((number)=>number%2==1)
// console.log(oddnum)

// const check = names.filter((hus)=>hus.includes('ias'))
// console.log(check)

// //reduce in this we have havee acumulator and current in callback function 
// const numm = [1,2,3,4,5,1]
// const result = numm.reduce(function(cum,fum){
//     return cum+fum
// },0)
// console.log(result)

// //every
// const hellobhai = names.every((nammee)=>typeof(nammee)==='string')
// console.log(hellobhai)

// const bollee = [true ,true,true,false]
// const booleanval = bollee.every((b)=>b==='true')
// console.log(booleanval)

// Some is same as every but the diffrence is ki koi ek value fulfiil krni chahiye condition ko
// excercise 2

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','England']
const nam = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function callbackfunc(hello){
    console.log(hello)
}


const value = countries.forEach(function(c){
    console.log(c)
})
console.log("\n")
const nameval = nam.forEach(function(n){
    console.log(n)
})
const numval = numbers.forEach(function(as){
    console.log(as)
})

const counttoupper = countries.map((counup)=>counup.toUpperCase())
console.log(counttoupper)

const countlength = countries.map((counlen)=>counlen.length)
console.log(countlength)

const squarenum = numbers.map((vall)=>vall**2)
console.log(squarenum)

const namecap = nam.map((nametocap)=>nametocap.toUpperCase())
console.log(namecap)

const productprice = products.map((pp)=>pp.price)
console.log(productprice)

const filtcountries = countries.filter((cc)=>cc.includes('land'))
console.log(filtcountries)
console.log(filtcountries.length)

 const sixchar=countries.filter((six)=>six.length===6)
 console.log(sixchar)

 const sixormorechar=countries.filter((more)=>more.length>=6)
 console.log(sixormorechar)

 const starval = countries.filter((siu)=>siu.startsWith('E'))
 console.log(starval)
 