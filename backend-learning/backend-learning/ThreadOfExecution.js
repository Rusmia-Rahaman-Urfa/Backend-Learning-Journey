// Thread of Execution

const num = 3;
function multiplyBy2 (input_number)
{
    const result = input_number * 2;
    return result;
}
const output = multiplyBy2 (num);
const newOutput = multiplyBy2 (10);
console.log("Output for 'num': ",output);
console.log("output for 10: ",newOutput);
