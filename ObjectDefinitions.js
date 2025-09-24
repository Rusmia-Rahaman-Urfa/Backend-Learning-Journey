// Object Definitions
// 1 - Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
console.log(man.firstName = "Peter");

// 2 - Object.fromEntries()

const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(fruits);

// 3 - Object.assign()
// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);
console.log(Object.assign(person1,person2));

// 4 - JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 10;
console.log(x);

