let firstname="Munis"
let lastname="Abbas"
let country  = "India"
let city = "Delhi"
let age = 18
let isMarried=false
let year = 2023

console.log(typeof(firstname))
console.log(typeof(lastname))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

let a ='10'
let b =10
console.log(a===b)

let c='9.8'
let d=10
console.log(c===d)

console.log(4>3)
console.log(4<3)

isLightOn=true;
console.log(isLightOn)
console.log(5>3)


isLightOn=false
console.log(isLightOn)
console.log(5<3)

console.log("-------------------------------------------------")


console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==3)
console.log(4!='4')
console.log(4 =='4')
console.log(4==='4')

let lang1 = "python"
let lang2 = "jargon"

var carr1=lang1.length
var carr2=lang2.length

console.log(carr1&&carr2)
console.log(carr1===carr2)//true value
console.log(carr1!=carr2)// but we neglect it to false value

console.log("_---------------------------------------------------")


console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4==='4'))


const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


let f1 = "Ali"
if(f1.length>7){
    console.log("Your name is Long")
}
else{
    console.log("Your name is short")
}

 let name1 = "Alihussain"
 let name2="Jafri"

 if(name1.length>name2.length){
    console.log(`Your first name ${name1} is longer then your family name,${name2}`)
 }

 let myAge = 250 
let yourAge= 25

if(myAge>yourAge){
    let comp = myAge-yourAge
    console.log(`I am ${comp} years older than you`)
}


// let birth = prompt("Enter birth year")
// let now = new Date()
// let age = now.getYear() -birth + 1900
// if(age>18){
//     console.log(`You are ${age}. You are enough to drive `)
// }
// else
// {
//     console.log(`You are ${age}. You are not eligible`)
    
// }

// let mess = prompt("Enter number of years you live")
// var secondsPerMinute = 60;
// var minutesPerHour = 60;
// var hoursPerDay = 24;
// var daysPerYear = 365.25; // accounting for leap years

// var secondsAlive = mess * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;

let y = now.getFullYear()
let m = now.getMonth()
let datee = now.getDate()
let h = now.getHours()
let min = now.getMinutes()
console.log(`${y}-${m}-${datee} ${h}:${min}`)
//DD-MM-YYYY HH:mm
console.log(`${datee}-${m}-${y} ${h}:${min}`)
console.log(`${datee}/${m}/${y} ${h}:${min}`)










