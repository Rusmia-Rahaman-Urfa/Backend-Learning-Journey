// General Methods
// Copies properties from a source object to a target object
// Object.assign(target, source)

// Creates an object from an existing object
// Object.create(object)

// Returns an array of the key/value pairs of an object
// Object.entries(object)

// Creates an object from a list of keys/values
// Object.fromEntries()

// Returns an array of the keys of an object
// Object.keys(object)

// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)

// 1 - The Object.assign() method copies properties from one or more source objects to a target object.
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
console.log(person1); // Changed name in person 1 according to person 2.
console.log(person2);

// 2 - Object.entries() returns an array of the key/value pairs in an object:
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(person);
console.log(text); // show the inputs in person

// 3 - Object.entries() makes it simple to use objects in loops:
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "\n";
}
console.log(text);

// 4 - Object.entries() also makes it simple to convert objects to maps:
const fruits = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruits));
console.log(myMap);

// 5 - Object.fromEntries
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);

// 6 - Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);
console.log(text);

// 7 - The Object.groupBy() method groups elements of an object according to string values returned from a callback function.

// The Object.groupBy() method does not change the original object
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result);

// 8 - JavaScript Object.keys()
// The Object.keys() method returns an array with the keys of an object.

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person);
console.log(keys); // [ 'firstName', 'lastName', 'age', 'eyeColor' ]

// 9 - The block of code inside of the for...in loop will be executed once for each property.
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};
let text = "";
for (let x in person) { // here x is Variable and person is Object
  text += person[x];
}
console.log(text);


