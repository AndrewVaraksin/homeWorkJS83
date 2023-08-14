// const user = {
//   name: 'Andrew',
//   lastName: 'Varaksin',
//   age: 34,
//   sayHello(name){
//     console.log(`Hello, ${name}!`)
//   }
// }
// user.sayHello('Andrew')


let simpleUsers = 0

const users = [
  {
  name: 'Andrew',
  lastName: 'Varaksin',
  age: 34,
  isAdmin: true
  },
  {
  name: 'Ivan',
  lastName: 'Ivanov',
  age: 25,
  isAdmin: false
  },
  {
  name: 'Egor',
  lastName: 'Egorov',
  age: 28,
  isAdmin: false
  }  
]
for (let i = 0; i < users.length; i++){
  if (users[i].isAdmin === false) {
    simpleUsers = simpleUsers + 1
  }
}
console.log(simpleUsers)

