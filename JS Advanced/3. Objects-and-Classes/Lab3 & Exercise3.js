// // Lab *****************************************************************
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
// };
// console.log(`The person is: ` + person['age']);
// person["age"] = 31;
// person["grade"] = 5;
// console.log(person);

// console.log(person);
// console.log(person.firstName + " " + person.lastName);
// person.firstName = "Petar";
// console.log(person);

// let person = {};

// person.firstName = "Pesho";
// person.lasName = "Petrov";
// person.age = 30;

// console.log(person);

// let x = {name: 'John'};
// let y = x;

// y.name = 'Pesho';
// console.log(x.name);

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     talk: function(){
//         console.log('Speaking...');
//     },
//     greeting: () => console.log('Hello!')
//   };

// person.talk();
// person.greeting();

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   course: {
//     name: "Maths",
//     teacher: "Yanko Petev",
//   },
// };

// let person2 = Object.assign({}, person);
// console.log(person2);

// delete person.age;
// console.log(person);

// // Looping through Object ******************************************************

// let course = {
//   name: "JS Course",
//   hall: "Open Source",
// };

// let keys = Object.keys(course);
// console.log(keys);
// if (course.hasOwnProperty("name")) {
//   console.log(course.name);
// }

// let values = Object.values(course);
//   console.log(values);
//  if(values.includes('JS Course')){
//    console.log("Found 'JS Core' values");
//  }

// if (course['name']){
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// for (const key in course) {
// //  console.log(key);
//  console.log(`${key} - ${course[key]}`);
// }

// let course = {
//   name: "JS Course",
//   hall: "Open Source",
//   teacher: "Yanko Petev",
// };

// let result = Object.entries(course);
// console.log(result);
// let newCourse = Object.fromEntries(result);
// console.log(newCourse);

// // JSON*************************************************************
// let received = '{ "manager":{"firstName":"John","lastName":"Doe"} }'; 
// let data = JSON.parse(received);
// console.log(data.manager.firstName);

// let course = {
//   name: "JS Course",
//   hall: "Open Source",
//   teacher: "Yanko Petev",
// };

// let data = JSON.stringify(course);
// console.log(data);

// //CLASS **************************************************************
// class Person {
//     constructor(name){
//         this.name = name;        
//     }
//     greet(){
//         console.log('Hello, my name is ' + this.name);        
//     }
// }
// let person1 = new Person('Pesho');
// let person2 = new Person('Gosho');
// person1.greet();
// console.log(person2);

class Person {
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;        
        }

        get age(){
            return this.currentAge;
        }

        set age(value){
            if(!(value < 0 || value > 120)){
            this.currentAge = value;
            }
        }

        greet(){
            console.log('Hello, my name is ' + this.name);        
        }
    }
    let person1 = new Person('Pesho', 'Petrov', 18);
    let person2 = new Person('Gosho', 'Goshov', 20);

    person1.age = -18;

    console.log(person1.age);
    