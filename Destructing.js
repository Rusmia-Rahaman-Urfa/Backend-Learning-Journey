// 1 - Destructing
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person; // The order of the properties does not matter:
console.log(firstName);
console.log(lastName);

// 2 - Object Default Values
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = person
console.log(person); // { firstName: 'John', lastName: 'Doe', age: 50 }
console.log(country); // US

// 3 - Object Property Alias
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName : name} = person;
console.log(person);
console.log(name); // output: Doe

// 4 - String Destructuring
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
console.log(name); // W3Schools
console.log(a1); // W

// 5 - Array Destructuring
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1); // Bananas

// 6 - Skipping Array Values
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1,,fruit2] = fruits; 
console.log(fruit1);
console.log(fruit2); // It will skip 1st Two elements and print Apples

// 7 - Array Position Values
// Create an Array

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let {[0]:fruit1 ,[1]:fruit2} = fruits;
console.log(fruit1); // Bananas

// 8 - The Rest Property
// Create an Array

const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers;
console.log(rest); // [30, 40, 50, 60, 70]
console.log(a); // 10
console.log(b); // 20

// 9 - Destructuring Maps
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructuring
let text = "";
for (const [key, value] of fruits) {
  text += key + " is " + value + "\n";
}
console.log(text);

// 10 - Swapping JavaScript Variables
// You can swap the values of two variables using a destructuring assignment
let firstName = "John";
let lastName = "Doe";

// Destructuring
[firstName, lastName] = [lastName, firstName];
console.log(firstName); // Doe
console.log(lastName); // John

