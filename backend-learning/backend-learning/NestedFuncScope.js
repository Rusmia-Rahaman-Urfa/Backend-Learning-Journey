function outer()
{
    let counter = 0;
    function incrementCounter()
    {
        counter ++;
        return counter;// Return new value of counter
    }
    return incrementCounter;
}

const result = outer();// Now 'result' holds incrementConter function
console.log("Outer Result: ",result());// Call it to see the counter increment
console.log("Outer result: ",result());// Call it again to see the counter increment