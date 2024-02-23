// // const arr = [1,2,3,4,5]
// // arr.splice(2,0)

// // console.log(arr)

// // for(let num of arr){
// //     console.log(num,arr[num])
// // }

// // for(let index = 0 ; index<arr.length; index++){
// //     console.log(index,arr[index])
// // }

// //Spread Operator
// const num = [1,2,3,4,5,6,7,8,9]
// console.log(...num)
// console.log(num[0],num[1])

// // clone 
// const copied = [...num]
// console.log(copied)

// // concat spread operator 

// const num1 = [11,12,13]
// const num2 = [14,15,16]
// let num3 = 100

// const number = [...num1,...num2]
// console.log(number)



// // to check array we have Array.isArray(var)
// console.log(Array.isArray(num1))
// console.log(Array.isArray(num3))


  //----------------------------Excercise -1


let ar1 = Array()
console.log(ar1)

let NumberArr = [1,2,3,4,5]

console.log(NumberArr.length)
console.log(NumberArr[0],NumberArr[2],NumberArr[4])


const mixedDataTypes = [
    name = 'Munis',
    age = 20 ,
    country = 'India',
    pincode=110032,
    isMarried = false,
    Roll_no = 32
]
console.log(mixedDataTypes.length)

const ItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM','Oracle','Amazon']
console.log(ItCompanies)
console.log(ItCompanies[0],ItCompanies[3],ItCompanies[6])
console.log(ItCompanies.toString())
console.log(ItCompanies.toString().toUpperCase())
if(ItCompanies.includes('Google')){
    console.log("Company found")
}
else{
    console.log("Company not exist")
}

let numbers1 = [1,2,5,6,2,8,2,2]
console.log(numbers1.sort())
console.log(numbers1.reverse())
console.log(ItCompanies.slice(0,3))
console.log(ItCompanies.slice(4,7))
console.log(ItCompanies.slice(3,4))
console.log("------------------------")
ItCompanies.splice(0,1)
ItCompanies.splice(3,1)
ItCompanies.splice(6,1)
ItCompanies.splice(0)
console.log(ItCompanies)

console.log("---------------------------------")
//Excercise 2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let mess = text.split(' ')
console.log(mess)
console.log(mess.length)

console.log("------------------------------------------------")

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.pop()
shoppingCart.push('Sugar')
shoppingCart[3]='green tea'
console.log(shoppingCart)


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


if(countries.includes('Ethiopia')){
    console.log("ETHIOPIA")
}else{
    console.log("Add it to the countries list")
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  if(webTechs.includes('Saas')){
    console.log('Saas exist')
  }
  else{
    webTechs.push("Saas")
  }
  console.log(webTechs)

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)




/// Excercise 3 


const ages = [13, 22, 19, 24, 20, 25, 28, 24, 25,25,24]
ages.sort()
const minAge = ages[0]
const maxAge = ages[ages.length-1]

console.log("Sorted array" + ages)
console.log("Minimum Age" + minAge)
console.log("Maximum Age" + maxAge)

const lengths = ages.length
const middleIndex = Math.floor(lengths/2)

let median
if(lengths%2===0){
  median = (ages[middleIndex-1]+ages[middleIndex])/2
}
else{
  median =ages[middleIndex]
}

console.log("Median:"+median)


const range = maxAge-minAge
console.log(range)


const countries2 = ["Argentina", "Brazil", "Chile", "Colombia", "Ecuador","India","Peru"];
console.log(countries2)
const length2 = countries2.length
const middleIndex_2 = Math.floor(length2/2)

let countriesmiddle

if(length2 % 2===1){
  countriesmiddle = [countries2[middleIndex_2]]
}
else{
  countriesmiddle = [countries2[middleIndex_2-1],countries2[middleIndex_2]]
}

console.log("Middlecountries :" + countriesmiddle)


let firsthalf,secondhalf
 if(length2 % 2===0){
  firsthalf = countries2.slice(0,middleIndex_2)
  secondhalf = countries2.slice(middleIndex_2)
 }
 else{
  firsthalf = countries2.slice(0,middleIndex_2+1)
  secondhalf = countries2.slice(middleIndex_2+1)
 }

 console.log("First half : " +firsthalf)
 console.log("Second half : " + secondhalf)

