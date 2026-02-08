function analyzeText(str) {
    if (typeof str != 'string' || str.trim().length === 0) {
        return "Invalid";
    }
    const token = str.split(" ").join("").length;
    const words = str.split(" ");
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return {
        longwords: longestWord,
        token: token
    };
}

console.log(analyzeText("I love programming with AI")); // Output: { longwords: 'programming', token: 22 }
console.log(analyzeText(12345)); // Output: Invalid
console.log(analyzeText("")); // Output: Invalid

