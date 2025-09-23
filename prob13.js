// Write a function that sorts an array of numbers in ascending order.


const num = [40,100,1,5,25,10];
num.sort(function(a , b){
    return a - b;
});
console.log(num);