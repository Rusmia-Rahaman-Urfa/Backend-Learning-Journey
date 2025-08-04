function copyArrayManipulate(array,instructions)
{
    const output = [];
    for(let i=0; i<array.length; i++)
    {
        output.push(instructions(array[i]));
    }
    return output;
}
//const multiplyBy2 = input => input * 2; Doesn't need to do this
const result = copyArrayManipulate([1,2,3],input = input => input * 2);
console.log("Standard Result: ",result);
