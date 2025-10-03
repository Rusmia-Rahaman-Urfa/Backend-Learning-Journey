// Find out String length

/*function string(text){
        return text.length;
}
console.log(string("Urfa"));
*/

// Find out index(position)
/*let text = "Urfa";
let char1 = text.charAt(0);
let char2 = text.charAt(1)
console.log(char1);
console.log(char2);
*/

// The charCodeAt() method returns the code of the character at a specified index in a string:
/*let text = "Apple";
let char = text.charCodeAt(0);
console.log(char);
*/

// Get code point value at any position in a string:
/*let text = "Apple";
let char = text.codePointAt(1); // here we can also use charCodeAt()
console.log(char);
*/

// Get the third letter of the text:
/*const text = "Urfa";
let letter = text.at(2); // we can find out the Letter in any index position
console.log(letter);
*/
/*const text = "Urfa";
let letter = text[2]; // alternative way of at() and we can Access Propery here
console.log(letter);
*/

/*let text = "Hello";
text[0] = "A"; // Does not work but no error
console.log(text[0]); // Print H  
console.log(text); // Print Hello
*/
//  String Concate()
/*let text1 = "Hello";
let text2 = "Urfa";
let text3 = text1.concat(" ", text2); // In " " there must be a space otherwise it will show HelloUrfa
console.log(text3);
*/
// There are 3 methods for extracting a part of a string:
//slice(start, end)
//substring(start, end)
//substr(start, length)

// Slice out a portion of a string from position 7 to position 13:
/*let text = "Apple, Banana, Orange";
let part = text.slice(7, 13); // comma & space will also be include. Here 7(index position) = Start and 14 = End
console.log(part);
*/

// If you omit the second parameter, the method will slice out the rest of the string:
/*let text = "Apple, Banana, Orange";
let part = text.slice(7);
console.log(part);
*/
// If a parameter is negative, the position is counted from the end of the string:
/*let text = "Apple, Banana, Orange";
let part = text.slice(-12); 
console.log(part);
*/
// This example slices out a portion of a string from position -12 to position -6:
/*let text = "Apple, Banana, Orange";
let part = text.slice(-12, -6); 
console.log(part); // output: nana,
*/
// Substr()
// Example 1
/*let text = "Apple, Banana, Orange";
let part = text.substring(7, 12); // index will start from 0, Start = 7, End = 12 , Ending will Delete. 
console.log(part);
*/
// Example 2
/*let text = "Apple, Banana, Orange";
let part = text.substring(7, 4); // index will start from 0, Start = 7, End = 4 (Length) will remove 
console.log(part); // output: e,
*/
// Example 3
/*let text = "Apple, Banana, Orange";
let part = text.substring(7);
console.log(part); // Output: Banana, Orange
*/
// Example 4
/*let text = "Apple, Banana, Orange";
let part = text.substring(-5); // start = 0, then reverse to -5 position . So, Full string will print
console.log(part); // Output: Apple, Banana, Orange
*/
// Converting Upper Case
/*let text1 = "Hello World";
let text2 = text1.toUpperCase();
console.log(text2);
*/
// Converting Lower Case
/*let text1 = "Hello World";
let text2 = text1.toLowerCase();
console.log(text2);
*/
// Check the string is Well_Formed 
// if Well-formed then returns true
/*let text = "Hello world!";
let result = text.isWellFormed();
console.log(result);
*/
// if not then returns false
/*let text = "Hello World \uD800";
let result = text.isWellFormed(); // contains long surrogates
console.log(result);
*/

// toWellFormed()
// The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD)
/*let text = "Hello World \uD800";
let result = text.toWellFormed(); 
console.log(result);
*/
// Trim - Remove White Space
/*let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
*/
// trimStart() - Remove white space from Start
/*let text1 = "    Hello World!     ";
let text2 = text1.trimStart();
let text3 = text1.length;
let text4 = text2.length;
console.log(text2);
console.log(text3);
console.log(text4);
*/
// Trim End 
/*let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
console.log(text2);
*/
// String padding
// String padStart()
// Example 1
/*let text = "5";
let padding = text.padStart(4, "1");
console.log(padding); // output: 1115
*/
// Example 2
/*let text = "5";
let padding = text.padStart(4, "x");
console.log(padding); // output: xxx5
*/
// Example 3 
/*let num = 5;
let text = num.toString(); // Numbers must convert to string first then apply Padding
let padding = text.padStart(4, "0");
console.log(padding);
*/
// padEnd - The padEnd() method pads a string from the end.

/*let text = "5";
let padding = text.padEnd(4, "1");
console.log(padding);
*/
// Repeat()

/*let text = "Hello world!";
let result = text.repeat(2);
console.log(result);
*/
// Replace()
// Example 1
/*let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
*/
// Example 2
/*
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
*/
// Example 3 - Case Sensitive
/*let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");
console.log(newText);
*/
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
/*let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);
*/
// To replace all matches, use a regular expression with a /g flag (global match):

/*let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);
*/
// Replace All()
/*let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);
*/
// Split() - A string can be converted to an array
// Example 1
/*let text = "a , b, c, d, e, f" ;
const array = text.split(",");
console.log(array[0]); // print a
*/
// Example 2
/*let text = "Urfa";
const array = text.split("");

for(let i = 0; i < array.length; i++){
        console.log(array[i]);
}
*/
// Example 3 - Split() pipe("|")
/*let text = "Rusmia | Rahaman" ;
const array = text.split("|");
console.log(array[1]);
*/






















