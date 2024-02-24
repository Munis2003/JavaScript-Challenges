function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))


  function calculateAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(2003))




                                     // Excercise 1

function Yourname(){
    let firstname = 'Munis'
    let space = ' '
    let lastname='Abbas'
    let fullname = firstname + space + lastname
    return fullname
}
console.log(Yourname())



const Fullname=(name1 , name2)=>{
    let finalname = name1+name2
    return finalname
}

console.log(Fullname('Rohit' , 'Singh'))


function addSum(num1,num2){
    let sum = num1+num2;
    console.log(sum)
}
addSum(2,3)



function areaofRectangle(length,width){
    let area = length*width
    console.log(area)
}
areaofRectangle(4,2)



function perimeterOfRectangle(l,w){
    let perimeter= 2*(l+w)
    console.log(perimeter)
}
perimeterOfRectangle(3,9)



function  volumeOfRectPrism(le,wi,height){
    let volume = le*wi*height
    return volume
}
console.log(volumeOfRectPrism(2,3,6))



function areaOfCircle(r){
    let areaOcircle = Math.PI*r*r
    console.log(areaOcircle)
}
areaOfCircle(4)


function  circumOfCircle(r1){
    let circumference = 2*Math.PI*r1
    console.log(circumference)
}
circumOfCircle(2)


const DensityofSubstance = (mass,volume)=>{
    let density = mass/volume;
    return density
}
console.log(DensityofSubstance(10,16))


function Physpeed(TD,TT){
    let speed = TD/TT
    return speed
}
console.log(Physpeed(50,12))



function WeightofSubstance(mass1,gravity){
    let weight = mass1*gravity
    return weight
}
console.log(WeightofSubstance(2,76))



function CelsiusToFahrenheit(oC){
    let oF = (oC*9/5)+32
    return oF
}
console.log(CelsiusToFahrenheit(11))


function calculateBMI(weight1,height1){
    let bmi = weight1/(height1*height1)
    if(bmi<18.5){
        console.log("Underweight")
    }
    else if(bmi>=18.5&&bmi<=24.9){
        console.log("Normal weight")
    }
    else if(bmi>=25 && bmi<=29.9){
        console.log("Overweight")
    }
    else{
        return "Obese"
    }
}

// to call the function
var weight1 = 65
var height1 = 1.82

var  checkbmi = calculateBMI(weight1,height1)
console.log(checkbmi)



function checkSeason(month){
        month = month.toLowerCase();
      
        if (month === "december" || month === "january" || month === "february") {
          return "Winter";
        } else if (month === "march" || month === "april" || month === "may") {
          return "Spring";
        } else if (month === "june" || month === "july" || month === "august") {
          return "Summer";
        } else if (month === "september" || month === "october" || month === "november") {
          return "Autumn";
        } else {
          return "Invalid month";
        }
      }
       //to call the func
      var month = "February";
      var season = checkSeason(month);
      console.log(season); 


    
      function findmax(a,b,c){
        if(a>b && a>c){
            return a
        }
        else if(b>a&&b>c){
            return b
        }
        else{
            return c
        }
      }
      console.log(findmax(1,15,3))


      // Excercise -2 

      function printArray(arr){
        for(let i =0;i<arr.length;i++){
        console.log(arr[i])
        }
      }
    
      const myArray = [1,2,3,4,5]
      printArray(myArray)


      function showDateTime(){
        let now = new Date()
        let datee = now.getDate()
        let months = now.getMonth()+1
        let years = now.getFullYear()
        let hours = now.getHours()
        let minutess = now.getMinutes()

        console.log(`${datee}/${months}/${years}  ${hours}:${minutess}`)
      }

      showDateTime();



    function swapvalues(x,y){
        let temp = x
        x=y
        y=temp

        console.log(`Swap values are : x = ${x} , y= ${y}`)
    }

    swapvalues(3,4)


function reverseArray(array){
    let reverse = []
    for(let i=array.length-1;i>=0;i--){
        reverse.push(array[i])
    }
    return reverse
}

console.log(reverseArray([1,2,3,4,5]))

function capitalizeArray(arr){
    let array=[]
    for(let i =0 ;i<arr.length;i++){
        const capitalizeelement = arr[i].toUpperCase();
        array.push(capitalizeelement)
    }
    return array
}

console.log(capitalizeArray(['ehllo']))
 


function addItem(item){
    let arr=[]
    arr.push(item)
    return arr
}
console.log(addItem('hello'))


function removeItem(index,array){
    if(index>=0&&index<array.length){
        array.splice(index,1)
    }
    return array
}
var fruits=[ 'mango', 'banana', 'kiwi','apple' ]
console.log(removeItem(3,fruits))



function sumofnumbers(number){
    let sum=0
    for(let i =0;i<number.length;i++){
        sum=sum+number[i]
    }
    return sum
}
const num = [12,3,3,2,2]
console.log(sumofnumbers(num))


function sumofodds(number){
    let sum=0
    for(let i=0;i<number.length;i++){
        if(number[i]%2!==0){
            sum=sum+number[i]
        }
    }
    return sum
}

const value = [1,2,3,4,5,6,7]
console.log(sumofodds(value))


function sumofevens(number){
    let sum=0
    for(let i=0;i<number.length;i++){
        if(number[i]%2===0){
            sum=sum+number[i]
        }
    }
    return sum
}

const val = [1,2,3,4,5,6,7,4,21,22]
console.log(sumofevens(val))

function evenodd(number){
    let even=0
    let odd=0

    while(number>0){
        if(number%2===0){
            even++
        }
        else{
            odd++
        }
        number = Math.floor(number/10)
    }
    console.log("the no of odds are" + odd);
    console.log("the no of even are" + even);
}

evenodd(100)

function sumofargs(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    return sum
}
console.log(sumofargs(1,2,3))


function genIP(){
    let ip=[]
    for(let i=0;i<4;i++){
        ip.push(Math.floor(Math.random()*256))
    }
    return ip.join('.')
} 
console.log(genIP())

function randomhexgenerator(){
    let hexchar='0123456789ABCDEF'
    let hex='#'

    for(let i=0;i<6;i++){
        const randomval=Math.floor(Math.random()*hexchar.length)
        hex=hex+hexchar[randomval]
    }
    return hex
}

console.log(randomhexgenerator())


function userIdgenrator(){
    let char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let vl=''
    for(let i=0;i<7;i++){
        const ao =Math.floor(Math.random()*char.length)
        vl = vl + char[ao]
    }
    return vl
}
console.log(userIdgenrator())