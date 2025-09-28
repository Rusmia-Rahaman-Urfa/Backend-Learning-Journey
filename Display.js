// 1 - Display JS Objects
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;
console.log(text);

// 2 - Display  Objects properties
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Add Properties
let text = person.name + "," + person.age + "," + person.city;
console.log(text);

// 3 - Using For loop
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
console.log(text);

// 4 - Create an Object.values()
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const Array = Object.values(person);

// Stringify the Array
let text = Array.toString();
console.log(text);

// 5 - Using Object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + " ";
}
console.log(text);

// 6 - Using JSON.stringify()
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let text = JSON.stringify(person);
console.log(text);
