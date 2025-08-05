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