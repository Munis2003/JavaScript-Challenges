let  course = "30 Days of JavaScript"
console.log(course)
console.log(course.length)
console.log(course.toLocaleUpperCase())
console.log(course.toLocaleLowerCase())
console.log(course.substr(0,2))
console.log(course.slice(3,21))
console.log(course.includes("Script"))
console.log(course.split(" "))
console.log(course.split("  "))
 let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(companies.split(" , "))

console.log(course.replace('JavaScript','Python'))
console.log(course.charAt(15))
console.log(course.charCodeAt('J'))
console.log(course.indexOf('a'))
console.log(course.lastIndexOf('a'))

let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let term = "         30 Days Of JavaScript."
console.log(term.trim())

console.log(course.startsWith(30))
console.log(course.endsWith('JavaScript'))

console.log(course.match(/a/g))

let m1 = '30 days of'
let m2 = ' JavaScript'

let m = m1.concat (m2)
console.log(m)

console.log(course.repeat(2))

//                                    LEVEL-2

console.log('There is no exercise better for the heart than reaching down and lifting people up.')

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let num1 = '10'
let num2 = 10

console.log(num1===num2)
var car = parseInt(num1)
console.log(typeof(car))
console.log(num2===car)

let a = '9.8'
let b = 10

console.log(a===b)

let c = parseFloat(a)
let rio = Math.round(c)
console.log(rio)

console.log(rio===b)

let first = 'python'
let second = 'jargon'

console.log(first&& second.includes('on'))

let sent = "I hope this course is not full of jargon"
console.log(sent.includes('jargon'))

console.log("1 1 1 1 1")
console.log("2 1 2 4 8")
console.log("3 1 3 9 27")
console.log("4 1 4 16 64")
console.log("5 1 5 25 125")

console.log(sentence.substr(31,23))



let io = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(io.match(/love/g).length)
console.log(io.match(/love/g))

console.log(sentence.match(/because/g).length)
console.log(sentence.match(/because/g))

