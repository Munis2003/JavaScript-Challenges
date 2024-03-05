// json to object

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText)
    console.log(usersObj)

    // object to json 


    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }

      const JSOObj = JSON.stringify(users)
      console.log(JSOObj)

      // filter array with json.stringify 
      const user = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        country: 'Finland',
        city: 'Helsinki',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
        age: 250,
        isLoggedIn: false,
        points: 30
      }

      const txt = JSON.stringify(user,['firstName','lastName','age'])
      console.log(txt)

      /// excercise
      

      const skill = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const text = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const skilltojsonn = JSON.stringify(skill)
console.log(skilltojsonn)

console.log(JSON.stringify(age))
console.log(JSON.stringify(isMarried))
const stdobj = JSON.stringify(student)
console.log(stdobj)

const stdobjlim = JSON.stringify(student,['firstName','lastName','skills'])
console.log(stdobjlim)

const jsonntoobj = JSON.parse(text)
console.log(jsonntoobj)

let maxskills = 0
let userwithmaxskills = ''
for(const fake in jsonntoobj){
    const userdata = jsonntoobj[fake]
    const skills = userdata.skills
    const numskills =skills.length

    if(numskills>maxskills){
        maxskills=numskills
        userwithmaxskills=fake
    }
}
console.log('User with the most skills:');
console.log(userwithmaxskills);
console.log('Number of skills:');
console.log(maxskills);