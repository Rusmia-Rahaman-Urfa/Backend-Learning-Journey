// We are interacting with a world outside of JavaScript now

function printHello()
{
    console.log("Hello");
}
function blockFor1Sec()
{
// blocks in the JavaScript thread for 1 Sec
}

setTimeout(printHello, 0);

blockFor1Sec()
console.log("Me first!");
