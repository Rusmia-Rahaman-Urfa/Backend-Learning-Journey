// Example - 1
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}

// Example - 2
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}



