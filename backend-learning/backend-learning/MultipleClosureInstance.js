function outer()
{
    let counter = 0;
    function incrementCounter()
    {
        counter ++;
        return counter;
    }
    return incrementCounter;
}
const myNewFunction = outer();
console.log("Result 1: ",myNewFunction());
console.log("Result 2: ",myNewFunction());
const anotherFunction = outer();
console.log("Result 3: ",anotherFunction());
console.log("Result 4: ",anotherFunction());