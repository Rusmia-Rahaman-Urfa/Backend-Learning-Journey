// 1 - Accessing JS properties 
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}
console.log(person.firstName); // output: John

// 2 - Adding New Properties

const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}
console.log(person.nationality = "Canadian");
console.log(person);

// 3 - Property Default Values
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

// Correct way to use the constructor
const myMother = new Person("John", "Doe", 50, "brown");

// Now you can log the new object instance
console.log(myMother);

// You can also access its properties
console.log(myMother.firstName);

// 4 - delete values
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age; // OR, delete person["age"];
console.log(person);

// 5 - Nested Objects
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
myObj.myCars.car2;
console.log(myObj.myCars.car2);
