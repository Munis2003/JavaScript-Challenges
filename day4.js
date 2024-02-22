 const prompt = require('prompt-sync')();
const age = prompt("Enter your age")
if(age>18){
    console.log("You are old enough to drive")
}
else{
    console.log("you are left with " +(18-age)+" years to drive" )
}


const yourAge=prompt("Enter your age")
let myAge=25
if(yourAge>myAge){
    console.log("you are " +(yourAge-myAge)+" years older than me")
}
else{
    console.log("I am " +(myAge-yourAge)+" years older than you")
}

console.log("----------------------------------------------------")

// if else method
let a=4
let b=3
if(a>b){
    console.log("a is greater than b")
}
else{
    console.log("a is less than b")
}
console.log("------------------------------------------------------")
//ternary method

a>b
? console.log("a is greater than b")
: console.log("a is less than b")

// console.log("--------------------------------------------------------")

// even odd
const num = prompt("Enter the number")
if(num%2==0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

//                                    Excercise 2


const marks = prompt("Enter your marks")
if(marks<=100&&marks>=80){
    console.log("A")
}
else if(marks<=89& marks>=70){
    console.log("B")
}
else if(marks<=69 && marks>=60){
    console.log("C")
}
else if(marks<=59&&marks>=50){
    console.log("D")
}
else if(marks<=49&&marks>=0){
    console.log("F")
}
else{
    console.log("Invalid marks")
}


let weather = prompt("Enter a month")
if(weather==='September'|| weather==='October'|| weather==='November'){
    console.log("Autumn")
}
else if(weather==='December'|| weather==='January' || weather==='February'){
    console.log("Winter")
}
else if(weather==='March'|| weather==='April' || weather==='May'){
    console.log("Spring")
}
else if(weather==='June'|| weather==='July' || weather==='August'){
    console.log("Summer")
}
else{
    console.log("Invalid Input")
}

let day = prompt("Enter the day")
switch(day){
    case 'Monday':
        console.log("Monday is a working day")
        break;

    case 'Tuesday':
        console.log("Tuesday is a working day")
        break;

        case 'Wednesday':
            console.log("Wednesday is a working day")
        break;

        case 'Thursday':
            console.log("Thursday is a working day")
        break;

        case 'Friday':
            console.log("Friday is a working day")
        break;

        case 'Saturday':
            console.log("Saturday is a weekend")
        break;

        case 'Sunday':
            console.log("Sunday is a weekend")
        break;
        
    

}

let mess = prompt("Enter a month")
if(mess==='January'|| mess==='March' || mess==='May' || mess==='July' || mess==='August' || mess==='October' || mess==='December'){
    console.log(`${mess} has 31 days.`)
}

else if(mess==='April' || mess==='June' || mess==='September' || mess==='November'){
    console.log(`${mess} has 30 days.`)
}
else if(mess==="February"){
    console.log(`${mess} has 28 days.`)
}
else{
    console.log("Invalid Input")
}


  