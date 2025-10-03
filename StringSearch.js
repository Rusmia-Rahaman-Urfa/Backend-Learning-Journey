/*let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 5);
console.log(index);
*/
/*let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match(/ain/gi);
console.log(myArr);
console.log(myArr.length);
*/
/*let text = "Hello world, welcome to the universe.";
let text1 = text.includes("urfa"); 
console.log(text1);
*/
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits.pop();
console.log(fruits);
*/
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[1] = "Kiwi";
console.log(fruits);
*/
/*const numbers = [4, 9, 16, 25, 29];

function myFunction(value) {
  return value > 18;
}

let first = numbers.find(myFunction);

console.log(first); // Output: 25
*/
/*const num = [40, 100, 1, 5, 25, 10];
num.sort(function(a, b){return a - b});
console.log(num[0]);
console.log(num[num.length - 1]);
*/

/*function myArrayMin(num) {
  return Math.min.apply(null, num);
}
console.log(myArrayMin(num));
*/
/*const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
   return value;
}
*/
/*function hello(a,...rest){
  console.log(a);
  console.log(rest);
}
hello("urfa", 20, 30, 40,50,60);
*/
/*let text = "Apple, Banana, Orange";
let part = text.substring(7,5);
console.log(part);
*/
// Function
// After a function expression has been stored in a variable, the variable can be used as a function:
/*const x = function(a,b){
  return a * b;
}
console.log(x(4, 3));
*/
// Example 2
/*const x = function (a, b) {
  return a * b;
}
let z = x(4, 3); // stored function in a variable
console.log(z);
*/
// Example 3
// Functions can also be defined with a built-in JavaScript function constructor called Function().
/*const func = new Function("a", "b", "return a * b");
let x = func(4, 3);
console.log(x);
*/
// Hoisting - we can call a function before they are declared.
/*let x = myFunction(5);

function myFunction(y) {
  return y * y;
}
console.log(x);
*/
// self - invoking - problem
/*(function () {
  let x = "Hello!!";  // I will invoke myself , directly function call 
  console.log(x);
})();
console.log();
*/
// Functions can be used as expression
/*function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3) * 2;
console.log(x);
*/
// Find out the length of the Arguments
/*function myFunction() {
  return arguments.length;
}

let x = myFunction(4, 3);
console.log(x);
*/
// The toString() method returns the function as a string:s
/*function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();
console.log(text);
*/
// Arrow function
// Example 1
/*let myFunction = (a, b) => a * b;
console.log(myFunction(3, 4));
*/
// Example 2
/*let hello = () => {
  return "Hello World!";
}
console.log(hello());
*/
/*let hello = val => "Hello " + val;
console.log(hello("world"));
*/
/*let myFunction = (x, y) => { return x * y };
console.log(myFunction(3,4));
*/
// Parameters

/*function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}
console.log(myFunction(3));
/*
function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5));
*/
/*function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);
*/
/*let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}
console.log(myFunction());
*/
/*const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName(); 
console.log(myObject);
*/
/*function myFunction() {
  let a = 4;
  return a * a;
}
console.log(myFunction()); // 16
*/
// The Arguments Object
// The argument object contains an array of the arguments used when the function was called (invoked).
/*x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);
*/
// Example 2
/*x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x);
*/
// invoking function
// Ex 1:
/*function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(10, 2)); 
*/
// Ex: 2
/*const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(myObject.fullName());
*/
// Invoking a Function with the Constructor
// This is a function constructor:
/*function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
console.log(myObj.firstName);
*/
/*"use strict";

function myFunction() {
  return this;
}

// Example 1: Calling the function directly.
// In strict mode, a direct call to a function will set 'this' to 'undefined'.
console.log(myFunction());

// Example 2: Calling the function as a method of an object.
// In strict mode, 'this' refers to the object that the function is a method of.
const myObject = {
  myMethod: myFunction
};
console.log(myObject.myMethod());
*/
// Closure - 1
/*let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();
console.log(counter);
*/
// Closure - 2
// Initiate counter
/*let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();
console.log(counter);
*/
// closure - 3
/*function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

let x= 0;
// Call add() 3 times
x = add();
x = add();
x = add();
console.log(x);
*/
// closure - 4
/*function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
add();
add();
add();
console.log(add());
*/

