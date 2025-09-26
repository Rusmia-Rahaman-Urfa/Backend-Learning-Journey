// 1 - Object methods
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

// 2 - Accessing Object Methods
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
const name = person.fullName();
console.log(name);

// 3 - Adding a method

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person.name = function() {
  return this.firstName + " " + this.lastName;
};
let x = person.name();
console.log(x);

// 4 - Using JavaScript Methods
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
console.log(person.name());





