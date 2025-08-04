// Example 1
function copyArrayManipulate(array,instructions)
{
    const output = [];
    for(let i=0; i<array.length; i++)
    {
        output.push(instructions(array[i]));
    }
    return output;
}
/*function multiplyBy2(input)
{
    return input * 2;
}*/
const multiplyBy2 = input => input * 2 //Arrow Func. Doesn't need to declare another function
const result = copyArrayManipulate([1,2,3],multiplyBy2);
console.log("Final result: ",result);
// Example 2
const output = multiplyBy2 (3); // 3 is input
console.log("Result for 3: ",output);