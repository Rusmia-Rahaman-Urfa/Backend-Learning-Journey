// Write a function that takes an array of numbers and returns the largest number.


function largestNum(num){
    return Math.max(...num);
}

const Array = [5, 17, 3, 40];
console.log(largestNum(Array));
