const emptyset = new Set()
console.log(emptyset)


let set = new Set()
for(let i=0;i<=10;i++){
    set.add(i)
}
console.log(set)
set.delete(0)
console.log(set)
set.clear()
console.log(set)
const name = ['Munis', 'Kerit', 'Himanshu','Abhishek','Mansha','Smriti']
const strset = new Set()
for(let i=0;i<name.length;i++){
    strset.add(name[i])
    if(strset.size===5){
        break;
    }
}
console.log(strset)


let countries = ['USA', 'Germany', 'Canada', 'Australia', 'Japan'];
let countryLengthMap = new Map();

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let length = country.length;
    countryLengthMap.set(country, length);
}

console.log(countryLengthMap);


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c =[...a,...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


let c2  =a.filter((num)=>B.has(num))
let D = new Set(c2)
console.log(D)

