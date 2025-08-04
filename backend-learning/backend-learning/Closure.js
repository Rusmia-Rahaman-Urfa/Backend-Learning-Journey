function createFunction()
{
    function multiplyBy2(num)
    {
        return num * 2;
    }
    return multiplyBy2;
}
const generatedFunc = createFunction();// Implementing closure; Functions with Memories;
const result = generatedFunc(3);
console.log("Result for 3: ",result);