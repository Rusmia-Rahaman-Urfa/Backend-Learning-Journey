// For a given array with marks of students -> [33, 38, 83, 69, 96].
//  Find the average marks of the entire class.


const marks = [33, 38, 83, 69, 96];
let sum = 0;
for(let i = 0; i < marks.length; i++){
    sum += marks[i];
}
const avg = sum / marks.length;
console.log(avg);