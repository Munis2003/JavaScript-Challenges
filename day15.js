const callback=(n)=>{
    return n*n
}

function cube(callback,n){
    return callback(n)*n
}
console.log(cube(callback,3))


fetchuser(1234,function(user){
    console.log(user)
    sentemail(user.email,function(response){
        console.log(response.success)
    })
    nameadded(user.name,function(res){
        console.log(res.success)
    })
})

function fetchuser(userid,callback){
    setTimeout(function()
    {
        console.log("hello munis")
        const  fetchuser = {
            id:userid,
            name:'Munis',
            email:'email@123gmail.com'
        };
        return callback(fetchuser)
    },2000)

}

function sentemail(emailval,callback){
    setTimeout(function(){
        const response = {success:true,notsuccess:false}
        callback(response)
    },3000)
}

function nameadded(nameval,callback){
    setTimeout(function(){
        const res = {success:`Name update - done `}
        callback(res)
    },4000)
}
//PRomise

const fake = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const skills = ['HTML','CSS','JavaScript']
        if(skills.length>0){
            resolve(skills)
        }
        else{
            reject('Invalid')
        }
    },2000)
})
fake.then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})

//FETCH API
// const fetchapi = fetch('https://restcountries.com/v2/all')
// fetchapi.then((res)=>res.json())
// .then((Profile)=>console.log(Profile))
// .catch((err)=>console.log(err))


// async function fetchapiusinawait(){
//     const apiawait = await fetch('https://restcountries.com/v2/all')
//     const fake1 = await apiawait.json()
//     console.log(fake1)
// }
// fetchapiusinawait()

// EXcercise ---------------------

// const countapi = fetch('https://restcountries.com/v2/all')
// countapi.then((res)=>res.json())
// .then((data=>{
//     data.forEach(country=> {
//         console.log('Name: ', country.name)
//         console.log('Capital: ', country.capital)
//         console.log('Languages: ', country.languages.map((lang)=>lang.name).join(', '))
//         console.log('Population: ', country.population)
//         console.log('Area: ', country.area)
//         console.log("----------------------------------")

//     });
// }))
// .catch((err)=>console.log(err))


// const catsAPI = fetch('https://api.thecatapi.com/v1/breeds')
// catsAPI.then((res)=>res.json())
// .then((catname)=>{
//     catname.forEach(catdata => {
//         let catnamevariable = catdata.name 
//         console.log(catnamevariable)
//         console.log('-----------------------------------')
// })

// })
// .catch((err)=>console.log(err))

// let countries = fetch('https://restcountries.com/v2/all')
// countries.forEach(count => {
//     count.languages.forEach(language => {
//         if (languages.indexOf(language.name) === -1) {
//             languages.push(language.name)
//         }
//     })
// })


// let response = fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     let officialLanguages = [];
//     // Iterate through each country
//     data.forEach(country => {
//       const languages = country.languages;

//       // Iterate through the official languages of the country
//       for (const language in languages) {
//         // Add unique official languages to the array
//         if (!officialLanguages.includes(language)) {
//           officialLanguages.push(language);
//         }
//       }
//     });

//     // Print the total count of official languages
//     console.log(`Official languages in the world are :  ${officialLanguages.length}   ${officialLanguages}`);
//   })
//   .catch(error => {
//     console.error('Error occurred while fetching country data:', error);
//   });


let countdata = fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    let officiallang = [];
    data.forEach(country => {
        const languages = country.languages
        for(let language in languages){
            if(!officiallang.includes(language)){
                officiallang.push(language)
            }
        }
    });
console.log(`Official lang in world are ${officiallang.length}`)
})
.catch((err)=>{
    console.log('Error occurred while fetching country data:', err)

})


